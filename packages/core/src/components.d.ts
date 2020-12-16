/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ISelectConfig, ISelectOption } from "./types/select";
import { IFormElementData } from "./types/form";
export namespace Components {
    interface MyContainer {
        "getVal": () => Promise<{}>;
    }
    interface WayButton {
        /**
          * Set to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"`.
         */
        "fill"?: 'outline' | 'solid';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to.
         */
        "href": string | undefined;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel": string | undefined;
        /**
          * Specifies where to display the linked URL. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target": string | undefined;
    }
    interface WayForm {
        "getVal": () => Promise<{}>;
    }
    interface WaySelect {
        "config"?: ISelectConfig;
        "form"?: boolean;
        "getVal": () => Promise<ISelectOption[]>;
        "name"?: string;
        "options"?: Array<ISelectOption>;
        "validation"?: (value: any) => string[];
        "value"?: Array<{ label: string; value: any }>;
    }
}
declare global {
    interface HTMLMyContainerElement extends Components.MyContainer, HTMLStencilElement {
    }
    var HTMLMyContainerElement: {
        prototype: HTMLMyContainerElement;
        new (): HTMLMyContainerElement;
    };
    interface HTMLWayButtonElement extends Components.WayButton, HTMLStencilElement {
    }
    var HTMLWayButtonElement: {
        prototype: HTMLWayButtonElement;
        new (): HTMLWayButtonElement;
    };
    interface HTMLWayFormElement extends Components.WayForm, HTMLStencilElement {
    }
    var HTMLWayFormElement: {
        prototype: HTMLWayFormElement;
        new (): HTMLWayFormElement;
    };
    interface HTMLWaySelectElement extends Components.WaySelect, HTMLStencilElement {
    }
    var HTMLWaySelectElement: {
        prototype: HTMLWaySelectElement;
        new (): HTMLWaySelectElement;
    };
    interface HTMLElementTagNameMap {
        "my-container": HTMLMyContainerElement;
        "way-button": HTMLWayButtonElement;
        "way-form": HTMLWayFormElement;
        "way-select": HTMLWaySelectElement;
    }
}
declare namespace LocalJSX {
    interface MyContainer {
    }
    interface WayButton {
        /**
          * Set to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"`.
         */
        "fill"?: 'outline' | 'solid';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to.
         */
        "href"?: string | undefined;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel"?: string | undefined;
        /**
          * Specifies where to display the linked URL. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target"?: string | undefined;
    }
    interface WayForm {
        "onValueChange"?: (event: CustomEvent<object>) => void;
    }
    interface WaySelect {
        "config"?: ISelectConfig;
        "form"?: boolean;
        "name"?: string;
        "onValueChange"?: (event: CustomEvent<IFormElementData>) => void;
        "options"?: Array<ISelectOption>;
        "validation"?: (value: any) => string[];
        "value"?: Array<{ label: string; value: any }>;
    }
    interface IntrinsicElements {
        "my-container": MyContainer;
        "way-button": WayButton;
        "way-form": WayForm;
        "way-select": WaySelect;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-container": LocalJSX.MyContainer & JSXBase.HTMLAttributes<HTMLMyContainerElement>;
            "way-button": LocalJSX.WayButton & JSXBase.HTMLAttributes<HTMLWayButtonElement>;
            "way-form": LocalJSX.WayForm & JSXBase.HTMLAttributes<HTMLWayFormElement>;
            "way-select": LocalJSX.WaySelect & JSXBase.HTMLAttributes<HTMLWaySelectElement>;
        }
    }
}
