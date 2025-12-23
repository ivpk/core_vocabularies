# ivpk/core_vocabularies — GitHub Pages site

This repo is prepared to publish static vocabulary documentation via GitHub Pages.

## Publishing path
The RISR core vocabulary is published under:

- `docs/vssa/risr/core/1.0/`

Expected public URL:

- `https://ivpk.github.io/core_vocabularies/vssa/risr/core/1.0/`

## Why an API module is included

The RISR Core Vocabulary is intentionally split into two parts:

- **Core vocabulary** – defines the *conceptual and semantic model* (classes, properties, meanings).
- **API module** – defines *transport- and API-level metadata* used when the vocabulary is applied in operational systems.

This separation follows SEMIC / ISA² best practices and serves several purposes:

1. **Clear separation of concerns**  
   The core vocabulary remains domain-focused and reusable across contexts, while API-specific concerns (such as response containers, transaction identifiers, or change tracking metadata) are isolated in a dedicated module.

2. **Reuse of the core vocabulary outside APIs**  
   By keeping API artefacts separate, the core vocabulary can be reused for:
   - data exchange between systems,
   - data modelling and documentation,
   - linked data publication,
   without imposing API-specific constraints.

3. **Alignment with lightweight OWL principles**  
   The core vocabulary avoids procedural or technical semantics. Validation rules and transport requirements are expressed either:
   - in the API module, or
   - via SHACL shapes.

4. **Operational interoperability**  
   The API module provides a consistent way to represent:
   - response containers,
   - transaction identifiers,
   - change tracking metadata,
   which are required in real-world API implementations but are out of scope for a pure conceptual model.

The API module is therefore **optional but complementary**:  
it does not redefine the meaning of core concepts, but enables their consistent and interoperable use in API-based systems.
