import 'react';

declare module 'react' {
    interface IntrinsicElements {
        main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
}
