#!/usr/bin/env tsx
/**
 * Validation script for city content files
 * Checks all city JSON files against the quality checklist requirements
 * 
 * Usage: npx tsx scripts/validate-city-content.ts
 */

import fs from "fs";
import path from "path";
import { validateChecklist } from "../lib/qualityGate";
import type { CityContent } from "../lib/contentStore";

interface ValidationResult {
  file: string;
  city: string;
  validation: ReturnType<typeof validateChecklist>;
  issues: string[];
}

function getAllCityFiles(): string[] {
  const contentDir = path.join(process.cwd(), "content", "areas");
  const files: string[] = [];

  function walkDir(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".json")) {
        files.push(fullPath);
      }
    }
  }

  if (fs.existsSync(contentDir)) {
    walkDir(contentDir);
  }

  return files;
}

function validateFile(filePath: string): ValidationResult | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const content = JSON.parse(raw) as CityContent;
    const validation = validateChecklist(content);
    const issues: string[] = [];

    // Collect issues
    if (!validation.hasNeighborhoods) {
      issues.push(
        `Neighborhoods: Expected 6-10, found ${validation.neighborhoodCount}`
      );
    }
    if (!validation.hasSchools) {
      issues.push("Schools: Missing or incomplete schools section");
    }
    if (!validation.hasCommute) {
      issues.push("Commute: Missing commute notes or major corridors");
    }
    if (!validation.hasAmenities) {
      issues.push("Amenities: Missing or incomplete amenities section");
    }
    if (!validation.hasMarketSnapshot) {
      issues.push("Market Snapshot: Missing market snapshot section");
    }
    if (!validation.marketSnapshotHasDate) {
      issues.push("Market Snapshot: Missing explicit date (asOf field)");
    }
    if (!validation.hasFaqs) {
      issues.push(
        `FAQ: Expected 5-8 questions, found ${validation.faqCount}`
      );
    }

    const relativePath = path.relative(process.cwd(), filePath);
    const cityName = path.basename(filePath, ".json");

    return {
      file: relativePath,
      city: cityName,
      validation,
      issues,
    };
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return null;
  }
}

function main() {
  console.log("🔍 Validating city content files against quality checklist...\n");

  const files = getAllCityFiles();
  if (files.length === 0) {
    console.log("No city content files found.");
    return;
  }

  const results: ValidationResult[] = [];
  for (const file of files) {
    const result = validateFile(file);
    if (result) {
      results.push(result);
    }
  }

  // Group by status
  const compliant = results.filter((r) => r.validation.allRequirementsMet);
  const nonCompliant = results.filter((r) => !r.validation.allRequirementsMet);

  // Print summary
  console.log("=".repeat(80));
  console.log("VALIDATION SUMMARY");
  console.log("=".repeat(80));
  console.log(`Total files checked: ${results.length}`);
  console.log(`✅ Compliant: ${compliant.length}`);
  console.log(`❌ Non-compliant: ${nonCompliant.length}\n`);

  // Print compliant files
  if (compliant.length > 0) {
    console.log("✅ COMPLIANT FILES:");
    compliant.forEach((r) => {
      console.log(`  • ${r.city} (${r.file})`);
    });
    console.log();
  }

  // Print non-compliant files with details
  if (nonCompliant.length > 0) {
    console.log("❌ NON-COMPLIANT FILES:");
    nonCompliant.forEach((r) => {
      console.log(`\n📄 ${r.city} (${r.file})`);
      console.log("   Issues:");
      r.issues.forEach((issue) => {
        console.log(`     • ${issue}`);
      });
    });
    console.log();
  }

  // Print detailed breakdown
  console.log("=".repeat(80));
  console.log("DETAILED BREAKDOWN");
  console.log("=".repeat(80));
  results.forEach((r) => {
    console.log(`\n${r.city}:`);
    console.log(`  Neighborhoods: ${r.validation.neighborhoodCount}/6-10 ${r.validation.hasNeighborhoods ? "✅" : "❌"}`);
    console.log(`  Schools: ${r.validation.hasSchools ? "✅" : "❌"}`);
    console.log(`  Commute: ${r.validation.hasCommute ? "✅" : "❌"}`);
    console.log(`  Amenities: ${r.validation.hasAmenities ? "✅" : "❌"}`);
    console.log(`  Market Snapshot: ${r.validation.hasMarketSnapshot ? "✅" : "❌"} ${r.validation.marketSnapshotHasDate ? "(with date)" : "(missing date)"}`);
    console.log(`  FAQ: ${r.validation.faqCount}/5-8 ${r.validation.hasFaqs ? "✅" : "❌"}`);
  });

  // Exit code
  process.exit(nonCompliant.length > 0 ? 1 : 0);
}

if (require.main === module) {
  main();
}


