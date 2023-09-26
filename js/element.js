"use strict";



class RawSpacingElement extends HTMLElement {
    constructor() { super(); }
}

class SpacingElement extends HTMLElement {
    constructor() {
        super();
        
        this.observer = new MutationObserver(() => this.didUpdateChildren());
    }

    connectedCallback() {
        this.observer.observe(this, { childList: true });
    }

    didUpdateChildren() {
        const spacing = this.getAttribute('spacing');
        const children = [];
        for (const child of this.children) {
            if (child instanceof RawSpacingElement) continue;

            children.push(child);
        }
        
        const length = children.length - 1;
        for (let i = 0; i < length; i++) {
            if (i == children.length) break;
            
            children.splice((i * 2) + 1, 0, this.createSpacingElementBySpacing(spacing));
        }
        
        this.observer.disconnect();
        this.replaceChildren(...children);
        this.observer.observe(this, { childList: true });
    }

    static get observedAttributes() { return ['spacing']; }

    attributeChangedCallback(_, oldValue, newValue) {
        if (oldValue != null && oldValue != newValue) {
            this.didUpdateChildren();
        }
    }
}

class ColumnSeparatedElement extends SpacingElement {
    createSpacingElementBySpacing(spacing) {
        const element = document.createElement('raw-spacing');

        element.style.display = 'block';
        element.style.height = spacing;
        
        return element;
    }
}

class RowSeparatedElement extends SpacingElement {
    createSpacingElementBySpacing(spacing) {
        const element = document.createElement('raw-spacing');

        element.style.display = 'inline-block';
        element.style.width = spacing;
        
        return element;
    }
}

customElements.define('raw-spacing', RawSpacingElement);

customElements.define('column-separated', ColumnSeparatedElement);
customElements.define('row-separated', RowSeparatedElement);