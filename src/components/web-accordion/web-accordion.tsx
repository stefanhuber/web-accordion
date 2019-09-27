import { Component, Host, Listen, h, Element, Method } from '@stencil/core';

@Component({
  tag: 'web-accordion',
  shadow: true
})
export class WebAccordion {

  @Element() element:HTMLElement;

  @Listen('openEvent')
  openEventHandler(event: CustomEvent) {
    const children = this.element.querySelectorAll('web-accordion-item');

    for (let i = 0; i < children.length; i++) {
      if (event.detail.index != i) {
        children[i].closeItem();
      }
    }
  }

  /**
   * Open an accordion item
   * @param index 
   */
  @Method()
  async open(index:number) {
    this.getAccordionItem(index).openItem();
  }

  /**
   * close an accordion item
   * @param index
   */
  @Method()
  async close(index:number) {
    this.getAccordionItem(index).closeItem();
  }

  getAccordionItem(index:number): HTMLWebAccordionItemElement {
    const children = this.element.querySelectorAll('web-accordion-item');

    if (index >= 0 && index < children.length) {
      return children[index];
    } else {
      throw new Error("index out of bounds");
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>       
      </Host>
    );
  }

}
