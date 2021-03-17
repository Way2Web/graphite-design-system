/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WayButton {
        /**
          * Set to true to draw a circle button.
         */
        "circle": boolean;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled": boolean;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: 'full' | 'block';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to.
         */
        "href": string | undefined;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel": string | undefined;
        /**
          * The button's size.
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * Specifies where to display the linked URL. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target": string | undefined;
        /**
          * The type of the button.
         */
        "type": 'submit' | 'reset' | 'button';
        /**
          * The different variants. The options are: `"default"`, `"primary"`, `"secondary"`, "danger", and `"text"`.
         */
        "variant"?: 'default' | 'primary' | 'secondary' | 'danger' | 'text';
    }
    interface WayInput {
        /**
          * Specifies what if input is disabled.
         */
        "disabled": boolean;
        /**
          * Specifies what if label and input must be inline.
         */
        "inline": boolean;
        /**
          * The input's label. Alternatively, you can use the label slot.
         */
        "label": string | undefined;
        /**
          * The input's name attribute.
         */
        "name": string | undefined;
        /**
          * The input's size.
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * Specifies what type of input to use.
         */
        "type": string | undefined;
    }
}
declare global {
    interface HTMLWayButtonElement extends Components.WayButton, HTMLStencilElement {
    }
    var HTMLWayButtonElement: {
        prototype: HTMLWayButtonElement;
        new (): HTMLWayButtonElement;
    };
    interface HTMLWayInputElement extends Components.WayInput, HTMLStencilElement {
    }
    var HTMLWayInputElement: {
        prototype: HTMLWayInputElement;
        new (): HTMLWayInputElement;
    };
    interface HTMLElementTagNameMap {
        "way-button": HTMLWayButtonElement;
        "way-input": HTMLWayInputElement;
    }
}
declare namespace LocalJSX {
    interface WayButton {
        /**
          * Set to true to draw a circle button.
         */
        "circle"?: boolean;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: 'full' | 'block';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to.
         */
        "href"?: string | undefined;
        /**
          * Emitted when the button loses focus.
         */
        "onWayBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the button has focus.
         */
        "onWayFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel"?: string | undefined;
        /**
          * The button's size.
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * Specifies where to display the linked URL. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target"?: string | undefined;
        /**
          * The type of the button.
         */
        "type"?: 'submit' | 'reset' | 'button';
        /**
          * The different variants. The options are: `"default"`, `"primary"`, `"secondary"`, "danger", and `"text"`.
         */
        "variant"?: 'default' | 'primary' | 'secondary' | 'danger' | 'text';
    }
    interface WayInput {
        /**
          * Specifies what if input is disabled.
         */
        "disabled"?: boolean;
        /**
          * Specifies what if label and input must be inline.
         */
        "inline"?: boolean;
        /**
          * The input's label. Alternatively, you can use the label slot.
         */
        "label"?: string | undefined;
        /**
          * The input's name attribute.
         */
        "name"?: string | undefined;
        /**
          * The input's size.
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * Specifies what type of input to use.
         */
        "type"?: string | undefined;
    }
    interface IntrinsicElements {
        "way-button": WayButton;
        "way-input": WayInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "way-button": LocalJSX.WayButton & JSXBase.HTMLAttributes<HTMLWayButtonElement>;
            "way-input": LocalJSX.WayInput & JSXBase.HTMLAttributes<HTMLWayInputElement>;
        }
    }
}
