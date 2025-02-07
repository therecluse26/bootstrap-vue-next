import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPlaceholder',
      props: [
        {
          description: 'Overrides the default component html tag',
          prop: 'tag',
          type: 'string',
        },
        {
          description:
            'Specifies the width of the placeholder. Width takes priority over prop cols',
          prop: 'width',
          type: 'string | number',
        },
        {
          description: 'Specifies the width of the placeholder by using grid col classes',
          prop: 'cols',
          type: 'string | number',
        },
        {
          description: 'Applies one of the Bootstrap theme color variants to the component',
          prop: 'variant',
          type: 'ColorVariant',
        },
        {
          description: 'Enlargens the vertical size of the Placeholder. Does not affect width',
          prop: 'size',
          type: 'PlaceholderSize',
        },
        {
          description: 'Displays an animation affect over the Placeholder',
          prop: 'animation',
          type: 'PlaceholderAnimation',
        },
      ],
      emits: [],
      slots: [],
    },
    {
      component: 'BPlaceholderCard',
      emits: [],
      props: [
        {
          description: 'Removes the card header',
          prop: 'noHeader',
          type: 'Booleanish',
        },
        {
          description: 'Passes the width to the Placeholder located in the header',
          prop: 'headerWidth',
          type: 'string | number',
        },
        {
          description: 'Passes the variant to the Placeholder located in the header',
          prop: 'headerVariant',
          type: 'ColorVariant',
        },
        {
          description: 'Passes the animation to the Placeholder located in the header',
          prop: 'headerAnimation',
          type: 'PlaceholderAnimation',
        },
        {
          description: 'Passes the size to the Placeholder located in the header',
          prop: 'headerSize',
          type: 'PlaceholderSize',
        },
        {
          description: 'Removes the card footer',
          prop: 'noFooter',
          type: 'Booleanish',
        },
        {
          description: 'Passes the width to the Placeholder located in the footer',
          prop: 'footerWidth',
          type: 'string | number',
        },
        {
          description: 'Passes the variant to the Placeholder located in the footer',
          prop: 'footerVariant',
          type: 'ColorVariant',
        },
        {
          description: 'Passes the animation to the Placeholder located in the footer',
          prop: 'footerAnimation',
          type: 'PlaceholderAnimation',
        },
        {
          description: 'Passes the size to the Placeholder located in the footer',
          prop: 'footerSize',
          type: 'PlaceholderSize',
        },
        {
          description: 'Passes the variant to the Placeholder located in the main body position',
          prop: 'variant',
          type: 'ColorVariant',
        },
        {
          description: 'Passes the animation to the Placeholder located in the main body position',
          prop: 'animation',
          type: 'PlaceholderAnimation',
        },
        {
          description: 'Passes the size to the Placeholder located in the main body position',
          prop: 'size',
          type: 'PlaceholderSize',
        },
        {
          description:
            'Removes the button classes in the Card footer spot to appear as a basic Placeholder',
          prop: 'noButton',
          type: 'Booleanish',
        },
        {
          description: 'Moves the image to the bottom of the Card',
          prop: 'imgBottom',
          type: 'Booleanish',
        },
        {
          description: 'Specifies the image src, overrides the blank image',
          prop: 'imgSrc',
          type: 'string',
        },
        {
          description: 'Changes the color to the blank image',
          prop: 'imgBlankColor',
          type: 'string',
        },
        {
          description: 'Changes the image height',
          prop: 'imgHeight',
          type: 'string | number',
        },
        {
          description: 'Removes the image',
          prop: 'noImg',
          type: 'Booleanish',
        },
      ],
      slots: [
        {
          description: 'Overrides the img default',
          name: 'img',
          scope: [],
        },
        {
          description: 'Overrides the header default',
          name: 'header',
          scope: [],
        },
        {
          description: 'Overrides the default placeholders',
          name: 'default',
          scope: [],
        },
        {
          description: 'Overrides the footer default',
          name: 'footer',
          scope: [],
        },
      ],
    },
    {
      component: 'BPlaceholderWrapper',
      emits: [],
      props: [
        {
          description: 'Determines whether the loading slot should be displayed',
          prop: 'loading',
          type: 'Booleanish',
        },
      ],
      slots: [
        {
          description: 'Content to show when the `loading` prop is `false`',
          name: 'default',
          scope: [],
        },
        {
          description: 'Content to show when the `loading` prop is `true`',
          name: 'loading',
          scope: [],
        },
      ],
    },
    {
      component: 'BPlaceholderTable',
      emits: [],
      props: [
        {
          description: 'The number of rows to display in the body of the PlaceholderTable',
          prop: 'rows',
          type: 'string | number',
        },
        {
          description:
            'The number of columns to display in the body of the PlaceholderTable. If footerColumns or headerColumns are undefined, they will use this value',
          prop: 'columns',
          type: 'string | number',
        },
        {
          description: 'Passes the width to the Placeholders located in the body',
          prop: 'cellWidth',
          type: 'string | number',
        },
        {
          description: 'Passes the size to the Placeholders located in the body',
          prop: 'size',
          type: 'PlaceholderSize',
        },
        {
          description: 'Passes the animation to the Placeholders located in the body',
          prop: 'animation',
          type: 'PlaceholderAnimation',
        },
        {
          description: 'Passes the variant to the Placeholders located in the body',
          prop: 'variant',
          type: 'ColorVariant',
        },
        {
          description: 'The number of columns to display in the header of the PlaceholderTable',
          prop: 'heaaderColumns',
          type: 'string | number',
        },
        {
          description: 'Hides the header',
          prop: 'hideHeader',
          type: 'Booleanish',
        },
        {
          description: 'Passes the width to the Placeholders located in the header',
          prop: 'headerCellWidth',
          type: 'string | number',
        },
        {
          description: 'Passes the size to the Placeholders located in the header',
          prop: 'headerSize',
          type: 'PlaceholderSize',
        },
        {
          description: 'Passes the animation to the Placeholders located in the header',
          prop: 'headerAnimation',
          type: 'PlaceholderAnimation',
        },
        {
          description: 'Passes the variant to the Placeholders located in the header',
          prop: 'headerVariant',
          type: 'ColorVariant',
        },
        {
          description: 'The number of columns to display in the footer of the PlaceholderTable',
          prop: 'footerColumns',
          type: 'string | number',
        },
        {
          description: 'The number of columns to display in the header of the PlaceholderTable',
          prop: 'headerColumns',
          type: 'string | number',
        },
        {
          description: 'Shows the footer',
          prop: 'showFooter',
          type: 'Booleanish',
        },
        {
          description: 'Passes the width to the Placeholders located in the footer',
          prop: 'footerCellWidth',
          type: 'string | number',
        },
        {
          description: 'Passes the size to the Placeholders located in the footer',
          prop: 'footerSize',
          type: 'PlaceholderSize',
        },
        {
          description: 'Passes the animation to the Placeholders located in the footer',
          prop: 'footerAnimation',
          type: 'PlaceholderAnimation',
        },
        {
          description: 'Passes the variant to the Placeholders located in the footer',
          prop: 'footerVariant',
          type: 'ColorVariant',
        },
      ],
      slots: [
        {
          description: 'Overwrites the thead of the table',
          name: 'thead',
          scope: [],
        },
        {
          description: 'Overwrites the tfoot of the table',
          name: 'tfoot',
          scope: [],
        },
        {
          description: 'Overwrites the tbody of the table',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BPlaceholderButton',
      emits: [],
      slots: [],
      props: [
        {
          description: 'Overrides the default component html tag',
          prop: 'tag',
          type: 'string',
        },
        {
          description:
            'Specifies the width of the placeholder. Width takes priority over prop cols',
          prop: 'width',
          type: 'string | number',
        },
        {
          description: 'Specifies the width of the placeholder by using grid col classes',
          prop: 'cols',
          type: 'string | number',
        },
        {
          description: 'Applies one of the Bootstrap theme color variants to the component',
          prop: 'variant',
          type: 'ColorVariant',
        },
        {
          description: 'Displays an animation affect over the Placeholder',
          prop: 'animation',
          type: 'PlaceholderAnimation',
        },
      ],
    },
  ],
}
