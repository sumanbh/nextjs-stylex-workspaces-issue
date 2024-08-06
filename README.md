Run the development server:

```bash
yarn dev
```

SWC plugin errors with

```
Import trace for requested module:
../stylex-lib/index.js
./app/components/ButtonsDemo.tsx
thread '<unnamed>' panicked at src/shared/utils/common.rs:538:8:
called `Result::unwrap()` on an `Err` value: StripPrefixError(())
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
thread '' panicked at /Users/geist/.cargo/registry/src/index.crates.io-6f17d22bba15001f/swc-0.273.24/src/plugin.rs:166:14:
failed to invoke plugin: failed to invoke plugin on 'Some("/nextjs-app-dir-stylex/packages/stylex-lib/index.js")'
```

Looks like there's an issue with file resolution? Changing the `rootDir` in `next.config.js`, doesn't help either.
