import { Component, Host, h, Prop, Event, EventEmitter, Method, Element, State, Watch } from '@stencil/core';

@Component({
  tag: 'web-accordion-item',
  styleUrl: 'web-accordion-item.css',
  shadow: true
})
export class WebAccordionItem {
  
  protected calculatedHeight = 0;

  get style() {
    return {
      height: this.open ? this.calculatedHeight + "px" : "0px"
    }   
  }

  @Element() element:HTMLElement;

  @State() transitioning = false;
  
  /**
   * index of accordion item from top to bottom
   */
  @Prop({mutable:true, reflect:true}) index = -1;

  /**
   * accordion item is open or opening (css transition)
   */
  @Prop({mutable:true, reflect:true}) open = false;
  
  @Watch("open")
  stateChanged() {
    this.transitioning = true;
  }

  /**
   * triggered when the accordion item is opened
   */
  @Event() openEvent:EventEmitter;

  componentDidLoad() {
    const children = this.element.parentElement.querySelectorAll('web-accordion-item');
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child == this.element) {
        this.index = i;
      }
    }    
  }

  componentDidRender() {
    this.calculatedHeight = this.element.querySelector(':not([slot="title"])').clientHeight;
  }

  /**
   * close the accordion item
   */
  @Method()
  async closeItem() {
    this.open = false;
  }

  /**
   * open the accordion item
   */
  @Method()
  async openItem() {
    this.open = true;
    this.openEvent.emit({
      index: this.index
    });
  }

  toggle() {
    if (this.open) {
      this.closeItem();
    } else {
      this.openItem();
    }    
  }

  handleTransitionEnd() {
    this.transitioning = false;
  }

  render() {
    return (
      <Host>
        <header onClick={() => this.toggle()}><slot name="title"></slot></header>
        <section onTransitionEnd={() => this.handleTransitionEnd()} class={{"transitioning":this.transitioning}} style={this.style}><slot /></section>
      </Host>
    );
  }
}