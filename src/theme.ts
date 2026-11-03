import { createTheme, type MantineColorsTuple } from '@mantine/core';

const brand: MantineColorsTuple = [
  '#eef1ff',
  '#dce2ff',
  '#b6c2fd',
  '#7d93ff',
  '#6b82f6',
  '#5570f4',
  '#4966f4',
  '#2343d6',
  '#1f3cc0',
  '#1834a8',
];

export const theme = createTheme({
  primaryColor: 'brand',
  colors: { brand },
  primaryShade: { light: 7, dark: 3 },
  autoContrast: true,
  defaultRadius: 'md',
  fontFamily: '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif',
  fontFamilyMonospace: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
  headings: {
    fontFamily: '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif',
    fontWeight: '700',
  },
});
