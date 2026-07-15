# AI Workflow Rules

## Approach
Build this project incrementally using a spec-driven workflow. Context files define what to build, how to build it, and the current state of progress. Always implement against these specs do not infer or invent behavior from scratch. Prioritize integrating `react-bits` for every new UI element created to ensure the "highly animated" requirement is met at every step.

## Scoping Rules
- Work on one feature unit at a time
- Prefer small, verifiable increments over large speculative changes
- Do not combine unrelated system boundaries in a single implementation step
- Implement the basic UI first, then immediately wrap it in the appropriate `react-bits` animation component before moving to the next feature.

## When to Split Work
Split an implementation step if it combines:
- Frontend UI creation and Backend API routing
- Complex `react-bits` implementations alongside heavy state management
- Behavior not clearly defined in the context files
If a change cannot be verified end to end quickly, the scope is too broad split it.

## Handling Missing Requirements
- Do not invent product behavior not defined in the context files
- If an animation style for a section is ambiguous, default to an appropriate `react-bits` text or scroll animation to maintain motion.
- If a requirement is missing, add it as an open question in `progress-tracker.md` before continuing

## Protected Files
Do not modify the following unless explicitly instructed:
- `components/ui/*` (generated shadcn UI components)
- Any third-party library internals

## Keeping Docs in Sync
Update the relevant context file whenever implementation changes:
- System architecture or boundaries
- Storage model decisions
- Code conventions or standards
- Feature scope

## Before Moving to the Next Unit
1. The current unit works end to end within its defined scope
2. No invariant defined in `architecture.md` was violated
3. `progress-tracker.md` reflects the completed work
4. `npm run build` passes
5. The UI element correctly incorporates `react-bits` for its animation phase.