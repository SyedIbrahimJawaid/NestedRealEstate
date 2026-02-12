# Area/City Pages: Quality Checklist

This checklist ensures all city/area pages meet quality standards for indexing and user experience.

## Required Elements

### 1. Neighborhoods (6-10) with who-it-fits notes
- [ ] Include 6-10 neighborhoods minimum
- [ ] Each neighborhood has a clear "who it fits" description
- [ ] Descriptions are specific and helpful (not generic)
- [ ] Neighborhoods are relevant to the city/area

### 2. Schools section (careful wording + source references where possible)
- [ ] Schools section includes careful, accurate wording
- [ ] Avoid unsubstantiated rankings or claims
- [ ] Include source references where possible (school district websites, etc.)
- [ ] Note that school assignments are address-based
- [ ] Mention verification is needed before committing

### 3. Commute and transit notes (typical times, major corridors)
- [ ] Include typical commute times (with context about peak hours)
- [ ] List major corridors (freeways, highways)
- [ ] Include transit options if available (rail, bus, etc.)
- [ ] Note that times vary by destination and time of day

### 4. Family amenities (parks, hospitals, childcare density)
- [ ] Include information about parks and recreation
- [ ] Mention hospitals and healthcare options
- [ ] Note childcare density/availability
- [ ] Be specific where possible (name major parks, hospitals)

### 5. Market snapshot with explicit date (for example: 'as of Jan 2026')
- [ ] Market snapshot section is present
- [ ] Includes explicit date (format: "As of [Month] [Year]")
- [ ] Contains relevant market insights
- [ ] Notes about pricing, inventory, or market dynamics

### 6. FAQ at the bottom (5-8 questions) + FAQPage schema
- [ ] FAQ section contains 5-8 questions minimum
- [ ] Questions are relevant to the city/area
- [ ] Answers are helpful and specific
- [ ] FAQPage schema is implemented (JSON-LD)
- [ ] Schema is properly formatted and valid

## Implementation Notes

- **Known thin-page risk**: Some cities are much more detailed than others. Standardize to the strongest template.
- All checklist items should be present in the `checklist` object in the city JSON content files
- The template (`CityPageTemplate.tsx`) automatically renders all checklist sections
- Fallback content is provided for cities without complete checklist data, but pages should be updated with real data

## Validation

A validation script is available to check all city content files against this checklist:

```bash
# Install tsx if not already available
npm install -D tsx

# Run validation
npx tsx scripts/validate-city-content.ts
```

The script will:
- Check all city JSON files in `content/areas/`
- Validate each file against all 6 checklist requirements
- Report compliant and non-compliant files
- Provide detailed breakdown of missing elements

The validation logic is also available programmatically via `lib/qualityGate.ts`:
```typescript
import { validateChecklist } from "@/lib/qualityGate";
import type { CityContent } from "@/lib/contentStore";

const validation = validateChecklist(content);
if (validation.allRequirementsMet) {
  // All checklist items are present and valid
}
```

## Content File Structure

The checklist data should be structured in the city JSON file as follows:

```json
{
  "checklist": {
    "neighborhoods": [
      { "name": "Neighborhood Name", "fit": "Who it fits description" }
    ],
    "schools": {
      "notes": ["Careful wording about schools"],
      "sources": [
        { "label": "Source Name", "url": "https://example.com" }
      ]
    },
    "commute": {
      "notes": ["Typical commute times and notes"],
      "corridors": ["I-5", "I-405"],
      "transit": ["Metro Line", "Bus routes"]
    },
    "amenities": {
      "notes": ["General notes about amenities"],
      "parks": ["Park names"],
      "hospitals": ["Hospital information"],
      "childcare": ["Childcare density notes"]
    },
    "marketSnapshot": {
      "asOf": "Jan 2026",
      "notes": ["Market insights"]
    }
  },
  "faqs": [
    { "q": "Question?", "a": "Answer." }
  ]
}
```

