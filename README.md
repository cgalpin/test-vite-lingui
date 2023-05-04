# test-vite-lingui
Simple test using react + lingui + vite.

Currently only works using `@vitejs/plugin-react-swc` and not `@vitejs/plugin-react` but even then, this has a bug that only switches `t` macro based translations the second time, and then they are out of sync as you switch back and forth.
