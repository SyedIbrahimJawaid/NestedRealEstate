-- =====================================================
-- BabyHomePlan Lead Form Database Schema for Supabase
-- =====================================================

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- LEADS TABLE
-- =====================================================
-- Main table for storing lead form submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Form Fields
  intent VARCHAR(20) NOT NULL CHECK (intent IN ('buying', 'selling', 'both')),
  timeline VARCHAR(10) NOT NULL CHECK (timeline IN ('0-33', '2-3', '3-6', '6+')),
  budget VARCHAR(20) NOT NULL,
  area VARCHAR(50) NOT NULL,
  city VARCHAR(100),
  baby_status VARCHAR(3) NOT NULL DEFAULT 'yes' CHECK (baby_status IN ('yes', 'no')),
  
  -- Contact Information
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  preferred_contact VARCHAR(10) NOT NULL CHECK (preferred_contact IN ('email', 'text', 'call')),
  notes TEXT,
  
  -- Consent & Privacy
  consent BOOLEAN NOT NULL DEFAULT false,
  
  -- UTM & Tracking Data
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  utm_term VARCHAR(100),
  utm_content VARCHAR(100),
  referrer TEXT,
  landing_page VARCHAR(255),
  
  -- Metadata
  form_location VARCHAR(20) CHECK (form_location IN ('sidebar', 'full', 'inline')),
  ip_address VARCHAR(45), -- IPv6 compatible
  user_agent TEXT,
  
  -- Status & Processing
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'rejected')),
  assigned_to UUID, -- Reference to users table if you have one
  notes_internal TEXT, -- Internal notes for team
  
  -- Timestamps
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  contacted_at TIMESTAMPTZ,
  
  -- Constraints
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT phone_required_for_text_call CHECK (
    (preferred_contact IN ('text', 'call') AND phone IS NOT NULL AND phone != '') OR
    preferred_contact = 'email'
  )
);

-- =====================================================
-- INDEXES for Performance
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_intent ON leads(intent);
CREATE INDEX IF NOT EXISTS idx_leads_area ON leads(area);
CREATE INDEX IF NOT EXISTS idx_leads_utm_source ON leads(utm_source);
CREATE INDEX IF NOT EXISTS idx_leads_utm_campaign ON leads(utm_campaign);
CREATE INDEX IF NOT EXISTS idx_leads_landing_page ON leads(landing_page);

-- Composite index for common queries
CREATE INDEX IF NOT EXISTS idx_leads_status_created ON leads(status, created_at DESC);

-- =====================================================
-- FORM EVENTS TABLE (Optional - for analytics)
-- =====================================================
-- Track form interactions and events
CREATE TABLE IF NOT EXISTS form_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  event_type VARCHAR(50) NOT NULL, -- 'form_start', 'form_submit_success', 'form_submit_error', 'lead_submit_buy'
  event_data JSONB, -- Store additional event parameters
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_form_events_lead_id ON form_events(lead_id);
CREATE INDEX IF NOT EXISTS idx_form_events_type ON form_events(event_type);
CREATE INDEX IF NOT EXISTS idx_form_events_created_at ON form_events(created_at DESC);

-- =====================================================
-- ROW LEVEL SECURITY (RLS) Policies
-- =====================================================
-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_events ENABLE ROW LEVEL SECURITY;

-- Policy: Service role can do everything (for API access)
CREATE POLICY "Service role full access on leads"
  ON leads FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access on form_events"
  ON form_events FOR ALL
  USING (auth.role() = 'service_role');

-- Policy: Authenticated users can only read their own leads (if you add user auth later)
-- Uncomment if needed:
-- CREATE POLICY "Users can read own leads"
--   ON leads FOR SELECT
--   USING (auth.uid() = user_id);

-- =====================================================
-- FUNCTIONS & TRIGGERS
-- =====================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- VIEWS (Optional - for reporting)
-- =====================================================

-- View: Daily lead summary
CREATE OR REPLACE VIEW daily_leads_summary AS
SELECT
  DATE(created_at) as date,
  COUNT(*) as total_leads,
  COUNT(*) FILTER (WHERE intent = 'buying') as buying_leads,
  COUNT(*) FILTER (WHERE intent = 'selling') as selling_leads,
  COUNT(*) FILTER (WHERE intent = 'both') as both_leads,
  COUNT(*) FILTER (WHERE preferred_contact = 'text') as text_preference,
  COUNT(*) FILTER (WHERE preferred_contact = 'call') as call_preference,
  COUNT(*) FILTER (WHERE preferred_contact = 'email') as email_preference,
  COUNT(DISTINCT area) as unique_areas
FROM leads
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- View: Lead sources (UTM tracking)
CREATE OR REPLACE VIEW lead_sources AS
SELECT
  utm_source,
  utm_medium,
  utm_campaign,
  COUNT(*) as lead_count,
  COUNT(*) FILTER (WHERE status = 'converted') as converted_count,
  MIN(created_at) as first_lead,
  MAX(created_at) as last_lead
FROM leads
WHERE utm_source IS NOT NULL
GROUP BY utm_source, utm_medium, utm_campaign
ORDER BY lead_count DESC;

-- =====================================================
-- SAMPLE QUERIES (for reference)
-- =====================================================

-- Get recent leads
-- SELECT * FROM leads ORDER BY created_at DESC LIMIT 10;

-- Get leads by status
-- SELECT * FROM leads WHERE status = 'new' ORDER BY created_at DESC;

-- Get leads by area
-- SELECT * FROM leads WHERE area = 'San Diego County' ORDER BY created_at DESC;

-- Get conversion rate by source
-- SELECT 
--   utm_source,
--   COUNT(*) as total,
--   COUNT(*) FILTER (WHERE status = 'converted') as converted,
--   ROUND(100.0 * COUNT(*) FILTER (WHERE status = 'converted') / COUNT(*), 2) as conversion_rate
-- FROM leads
-- WHERE utm_source IS NOT NULL
-- GROUP BY utm_source
-- ORDER BY conversion_rate DESC;

-- Get daily lead count for last 30 days
-- SELECT * FROM daily_leads_summary WHERE date >= CURRENT_DATE - INTERVAL '30 days';

