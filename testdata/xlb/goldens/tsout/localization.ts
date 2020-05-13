
    // Do not modify this file by hand!
    // Re-generate this file by running lit-localize

    /* eslint-disable @typescript-eslint/no-explicit-any */
    /* eslint-disable @typescript-eslint/camelcase */

    import {TemplateResult} from 'lit-html';
    import {messages as es_419Messages} from './es-419.js';

    export const supportedLocales = ['en', 'es-419'] as const;

    export type SupportedLocale = typeof supportedLocales[number];

    export const isSupportedLocale = (x: string): x is SupportedLocale => {
      return supportedLocales.includes(x as SupportedLocale);
    };

    export const defaultLocale = 'en';

    const getLocaleFromUrl = () => {
      const url = new URL(document.location.href);
      const locale = new URLSearchParams(url.search).get('locale');
      if (locale) {
        if (isSupportedLocale(locale)) {
          return locale;
        } else {
          console.warn(`${locale} is not a supported locale`);
        }
      }
      return defaultLocale;
    };

    const locale = getLocaleFromUrl();

    export const getLocale = () => {
      return locale;
    };

    export function msg(name: MessageName, str: string): string;

    export function msg(name: MessageName, tmpl: TemplateResult): TemplateResult;

    export function msg<F extends (...args: any) => string>(
      name: MessageName,
      fn: F,
      ...params: Parameters<F>
    ): string;

    export function msg<F extends (...args: any) => TemplateResult>(
      name: MessageName,
      fn: F,
      ...params: Parameters<F>
    ): TemplateResult;

    export function msg(
      name: MessageName,
      source: string|TemplateResult|(() => string|TemplateResult),
      ...params: unknown[]): string|TemplateResult {
      let resolved;
      switch (locale) {
        case defaultLocale:
          resolved = source;
          break;
        
        case 'es-419':
          resolved = es_419Messages[name];
          break;
        default:
          console.warn(`${locale} is not a supported locale`);
      }
      if (!resolved) {
        console.warn(`Could not find ${locale} string for ${name}`);
        resolved = source;
      }
      return typeof resolved === 'function'
        ? (resolved as any)(...params)
        : resolved;
    }

    type MessageName = 'lit'|'lit_variables_1'|'lit_variables_2'|'lit_variables_3'|'string'|'variables_1';
  