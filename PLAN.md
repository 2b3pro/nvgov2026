# Nevada Governor 2026 Voter Information Website

## Project Vision

A modern, polished public service website that helps Nevada voters understand the three gubernatorial candidates through layered information architecture: quick summaries for casual voters, deep analysis for engaged citizens. The site covers both the Democratic primary (Ford vs Hill) and the general election.

**Editorial Approach:** Analytical but fair. We provide context and help voters understand implications while presenting all perspectives honestly. Claims are sourced, contradictions are acknowledged, and complexity is respected.

---

## The Three Candidates

| Candidate | Party | Current Role | Core Identity |
|-----------|-------|--------------|---------------|
| **Joe Lombardo** | Republican | Governor (Incumbent) | "The Veto Governor" - Former Sheriff, Law & Order, Corporate Statist |
| **Aaron Ford** | Democrat | Attorney General | "The System Operator" - Trial lawyer ties, litigation-as-policy, Reid Machine inheritor |
| **Alexis Hill** | Democrat | Washoe County Commission Chair | "The Technocratic Progressive" - Tax reformer, anti-corporate subsidies, institutionalist |

---

## Information Architecture

### Layer 1: The Quick View (30 seconds)
- Candidate photo, name, party
- One-sentence description
- 3 key positions (icons)
- "Learn more" buttons

### Layer 2: The Comparison (2-3 minutes)
- Side-by-side issue comparison table
- Key facts at a glance
- Major endorsements
- Quick contradiction summary

### Layer 3: The Deep Dive (10+ minutes)
- Full biography with context
- Complete voting/veto record
- Financial forensics
- Source-linked claims
- Timeline of positions

---

## Site Structure

```
/
├── index.html                 # Landing page with all three candidates
├── candidates/
│   ├── lombardo.html          # Lombardo deep dive
│   ├── ford.html              # Ford deep dive
│   └── hill.html              # Hill deep dive
├── compare/
│   ├── index.html             # Interactive comparison tool
│   ├── primary.html           # Ford vs Hill comparison
│   └── issues/
│       ├── housing.html
│       ├── economy.html
│       ├── crime.html
│       ├── education.html
│       ├── healthcare.html
│       ├── taxes.html
│       ├── immigration.html
│       ├── guns.html
│       ├── environment.html
│       ├── transparency.html
│       └── abortion.html
├── money/
│   └── index.html             # Campaign finance explorer
├── about.html                 # Methodology, sources, team
└── assets/
    ├── css/
    ├── js/
    └── images/
```

---

## Issue Framework

For each policy domain, we present:

### 1. The Stakes
What's the Nevada-specific context? Why does this issue matter here more than elsewhere?

### 2. The Positions (Side-by-Side)

| Aspect | Lombardo | Ford | Hill |
|--------|----------|------|------|
| **Stated Position** | Quote/platform | Quote/platform | Quote/platform |
| **Actual Record** | Votes/vetoes | Legislation/litigation | Votes/actions |
| **Key Actions** | Specific examples | Specific examples | Specific examples |
| **Who Benefits** | Analysis | Analysis | Analysis |

### 3. The Contradictions
For each candidate, honestly present:
- Where their actions diverge from rhetoric
- Where they've changed positions (with context for why)
- What their opponents say vs. what evidence shows

### 4. The Sources
Every claim linked to primary documentation

---

## The 11 Issue Domains

### 1. Housing & Rent
**Nevada Context:** Highest eviction rates in nation, Las Vegas housing crisis, corporate landlord consolidation

| Candidate | Position | Key Action | Contradiction |
|-----------|----------|------------|---------------|
| **Lombardo** | Free market, no rent control | Vetoed SB335, AB486, AB44 | Chief of Staff is former corporate housing lobbyist; $25M+ from Bigelow (Budget Suites) |
| **Ford** | Anti-price fixing, sued algorithmic rent software | AB44 vetoed by Lombardo | Trial lawyer donors benefit from housing litigation |
| **Hill** | Supports rent caps | Votes for developer projects | Takes realtor PAC money; developers Locus/Lepori fund her |

### 2. Economy & Jobs
**Nevada Context:** Highest unemployment rate in nation (5.3-5.6%), tourism dependency, diversification attempts

| Candidate | Position | Key Action | Contradiction |
|-----------|----------|------------|---------------|
| **Lombardo** | "The Nevada Way" - business friendly | $380M A's stadium, $330M Tesla abatement | "Free market" rhetoric vs. massive corporate subsidies |
| **Ford** | Diversification, worker protections | Commerce Tax support | Corporate defense attorney background at Weil Gotshal |
| **Hill** | End corporate subsidies, margin tax | Anti-Tesla tax breaks | Local developer relationships |

### 3. Crime & Public Safety
**Nevada Context:** AB 236 criminal justice reform debate, Strip safety, 1 October legacy

| Candidate | Position | Key Action | Contradiction |
|-----------|----------|------------|---------------|
| **Lombardo** | Repeal AB 236, law & order | Resort Corridor Court, crime bill | $19M in civil rights settlements under his LVMPD tenure |
| **Ford** | Justice reinvestment, reform | AB 236 architect | Pivoting to "support law enforcement" messaging |
| **Hill** | Administrative efficiency | Voted FOR camping ban (with Republican dissent) | "Progressive" but criminalizes homelessness |

### 4. Education
**Nevada Context:** 48th in per-pupil funding, school choice debates, teacher shortages

| Candidate | Position | Key Action | Contradiction |
|-----------|----------|------------|---------------|
| **Lombardo** | School choice, charter expansion | $2B K-12 increase, $38M charter raises | "Schools Over Stadiums" - $380M for stadium instead |
| **Ford** | Public school funding, sued DOE | Ph.D. in Educational Administration | SB555 scholarship tax credits (Republican priority) |
| **Hill** | Fund public schools | Supports tax reform for education | Library tax failed at ballot |

### 5. Healthcare
**Nevada Context:** Opioid crisis devastation, rural access gaps, Medicaid expansion

| Candidate | Position | Key Action | Contradiction |
|-----------|----------|------------|---------------|
| **Lombardo** | Defended Medicaid work requirements | Vetoed gender-affirming care protections | Signed SB131 abortion protections |
| **Ford** | Opioid settlement champion ($1.1B) | Defended ACA | Outside counsel fees to donor firms |
| **Hill** | Healthcare access | County-level health initiatives | Limited state-level record |

### 6. Taxes & Revenue
**Nevada Context:** No income tax, gaming-dependent, structural underfunding

| Candidate | Position | Key Action | Contradiction |
|-----------|----------|------------|---------------|
| **Lombardo** | Low tax, no new revenue | Massive corporate tax breaks | Not "low tax" for billionaires |
| **Ford** | Maintain Commerce Tax | Film/scholarship tax credits | Supports targeted breaks |
| **Hill** | Margin tax proposal | Explicit tax reform platform | 2014 margin tax failed 79-21 |

### 7. Immigration
**Nevada Context:** Sanctuary city debates, workforce needs, federal friction

| Candidate | Position | Key Action | Contradiction |
|-----------|----------|------------|---------------|
| **Lombardo** | Anti-sanctuary, federal cooperation | Blamed Ford for sanctuary designation | Soft MAGA approach |
| **Ford** | 2017: Co-sponsored sanctuary legislation; 2025: "I do not support sanctuary policies" | Model immigration policies | Complete position reversal |
| **Hill** | Democratic platform alignment | Limited local authority | No major controversy |

### 8. Guns
**Nevada Context:** 1 October mass shooting, tourism safety, 70% support for some regulations

| Candidate | Position | Key Action | Contradiction |
|-----------|----------|------------|---------------|
| **Lombardo** | 2A defender | Vetoed AB105, AB245, SB89 | Was Sheriff during 1 October |
| **Ford** | Gun safety, background checks | Supports regulations | No major contradiction |
| **Hill** | Gun safety | Democratic platform | Limited record |

### 9. Water & Environment
**Nevada Context:** Colorado River crisis, Lake Mead, lithium mining

| Candidate | Position | Key Action | Contradiction |
|-----------|----------|------------|---------------|
| **Lombardo** | Development-friendly | Tesla/mining support | Environmental regulations vetoed |
| **Ford** | Climate litigation | Joined climate lawsuits | No major record |
| **Hill** | Tahoe preservation | Environmental background | Supports density that impacts environment |

### 10. Transparency & Ethics
**Nevada Context:** Dark money growth, open records battles, ethics commission

| Candidate | Position | Key Action | Contradiction |
|-----------|----------|------------|---------------|
| **Lombardo** | Claims transparency | Service First Fund dark money, sued to hide emails, vetoed SB60 | Badge Gate ethics violation |
| **Ford** | Anti-corruption | Consumer protection focus | AGA trips ($140K+), CFJ donor loop |
| **Hill** | Open government | Election certification | Restricted public comment |

### 11. Abortion & Reproductive Rights
**Nevada Context:** Codified in state constitution, but national pressures

| Candidate | Position | Key Action | Contradiction |
|-----------|----------|------------|---------------|
| **Lombardo** | "Pro-life" personally, signed protections | Signed SB131 | Rhetoric vs. action |
| **Ford** | Pro-choice | Consistent | No contradiction |
| **Hill** | Pro-choice | Democratic platform | No contradiction |

---

## The Contradictions Framework

For each candidate, we present a balanced "Steelman vs. Challenge" section:

### Template

```
## [Candidate Name]: The Full Picture

### The Strongest Case FOR [Candidate]
[Present the best arguments for this candidate, fairly stated]

### The Strongest Case AGAINST [Candidate]
[Present the most legitimate criticisms, fairly stated]

### The Key Contradictions
1. [Says X, but did Y]
2. [Claims to be X, but funded by Y]
3. [Position changed from X to Y because...]

### What Their Opponents Say (vs. Evidence)
| Attack | Evidence Level | Context |
|--------|---------------|---------|
| "[Attack claim]" | Strong/Weak/Mixed | [Reality check] |
```

---

## Candidate Deep Dive Structure

### 1. At a Glance
- Photo, basic bio
- Key stats
- Quick summary

### 2. The Origin Story
- Where they came from
- Formative experiences
- What shaped their worldview

### 3. The Career Path
- Timeline visualization
- Key positions held
- Major accomplishments

### 4. The Policy Record
- Issue-by-issue breakdown
- Votes/vetoes/litigation
- Linked to sources

### 5. The Money Trail
- Top donor visualization
- Industry breakdown
- Conflict analysis
- Dark money where applicable

### 6. The Influence Network
- Key allies
- Institutional support
- Political machine connections
- Notable adversaries

### 7. The Contradictions
- Steelman + challenges
- Position evolution
- Evidence-based analysis

### 8. The Electoral Math
- Path to victory
- Key demographics
- Vulnerabilities

---

## Design Specifications

### Visual Identity

**Color Palette:**
- Primary: Deep navy (#1a365d) - trustworthy, serious
- Accent: Nevada gold (#d69e2e) - state pride
- Neutral: Warm grays for readability
- Candidate colors (optional, subtle):
  - Lombardo: Muted red
  - Ford: Muted blue
  - Hill: Muted teal

**Typography:**
- Headlines: Modern serif (e.g., Merriweather, Playfair Display)
- Body: Clean sans-serif (e.g., Inter, Source Sans Pro)
- Data: Monospace for numbers

**Design Principles:**
- Mobile-first responsive
- High contrast for accessibility
- Clear visual hierarchy
- Generous whitespace
- Source links always visible

### Interactive Elements

1. **Comparison Tool**
   - Select 2-3 candidates
   - Choose issues to compare
   - Side-by-side cards

2. **Issue Explorer**
   - Filter by domain
   - See all three positions
   - Link to sources

3. **Money Flow Visualization**
   - Donor categories
   - Contribution amounts
   - Potential conflicts

4. **Timeline View**
   - Career milestones
   - Position changes
   - Key votes/actions

---

## Technical Stack

### Recommended Approach

**Option A: Static Site (Recommended)**
- Next.js or Astro for static generation
- Tailwind CSS for styling
- Simple hosting (Vercel, Netlify)
- Markdown/MDX for content
- Lightweight interactivity with vanilla JS or Alpine.js

**Option B: Pure HTML/CSS/JS**
- No build process
- Easier to maintain long-term
- Can still be polished and modern
- Good for archival purposes

### Performance Requirements
- < 3 second load time
- Works without JavaScript for core content
- Accessible (WCAG 2.1 AA)
- Print-friendly candidate pages

---

## Content Priorities

### Phase 1: Foundation
1. Homepage with all three candidates
2. Individual candidate pages with biography and key positions
3. Basic issue comparison page
4. Mobile-responsive design

### Phase 2: Depth
1. Full issue breakdown pages (11 issues)
2. Campaign finance visualization
3. Contradiction analysis sections
4. Primary comparison (Ford vs Hill)

### Phase 3: Polish
1. Interactive comparison tool
2. Timeline visualizations
3. Source explorer
4. Share/embed functionality

---

## Methodology & Transparency

### Our Standards

1. **Sourcing**
   - Every factual claim linked to primary source
   - Preference for official records, court documents, financial disclosures
   - News sources used for context, not sole evidence
   - Partisan sources clearly labeled

2. **Fairness**
   - Each candidate gets same structural treatment
   - Contradictions identified for all, not selectively
   - Steelman arguments presented honestly
   - Updates applied equally

3. **Analysis**
   - Clearly labeled as analysis vs. fact
   - Multiple interpretations acknowledged
   - Methodology explained
   - Open to correction

### What This Site Is NOT
- An endorsement
- A prediction
- A complete record (we link to fuller sources)
- Immune to bias (we try to be transparent about limitations)

---

## Primary Election Considerations

### Ford vs Hill: The Democratic Choice

The site should help Democratic primary voters understand:

| Dimension | Ford | Hill |
|-----------|------|------|
| **Experience** | Statewide (AG, State Senate) | Local (County Commission) |
| **Electability** | Polls tied with Lombardo | Untested statewide |
| **Economic Platform** | Moderate/transactional | Bold/risky (margin tax) |
| **Machine Support** | Reid Machine, unions, trial lawyers | Insurgent, limited backing |
| **Vulnerability** | IRS liens, donor conflicts, AB 236 | Developer ties, tax history |

---

## Success Metrics

1. **Information Quality**
   - Accuracy of claims
   - Depth of sourcing
   - Balanced coverage

2. **User Engagement**
   - Time on site
   - Pages per session
   - Return visits

3. **Public Service**
   - Shared by voters
   - Cited by journalists
   - Useful for civic education

---

## Next Steps

1. [ ] Set up project structure and build system
2. [ ] Create design system (colors, typography, components)
3. [ ] Build homepage with candidate cards
4. [ ] Create individual candidate page template
5. [ ] Populate Lombardo page (most data available)
6. [ ] Populate Ford page
7. [ ] Populate Hill page
8. [ ] Build issue comparison framework
9. [ ] Create first 3 issue deep-dives (Housing, Crime, Economy)
10. [ ] Build campaign finance visualization
11. [ ] Complete remaining issue pages
12. [ ] Build interactive comparison tool
13. [ ] Add primary comparison section
14. [ ] Polish, test, deploy
