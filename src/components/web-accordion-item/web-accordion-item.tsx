import { Component, Host, h, Prop, Event, EventEmitter, Method, Element, State, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'web-accordion-item',
  styleUrl: 'web-accordion-item.css',
  shadow: true
})
export class WebAccordionItem {
  
  protected calculatedHeight = 0;
  protected mutationObserver:MutationObserver;

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

  /**
   * The mutation observer config to listen for content changes in the accordion item
   */
  @Prop() mutationObserverConfig = { childList: true, subtree: true };
   
  @Watch("open")
  stateChanged() {
    this.transitioning = true;
  }

  /**
   * triggered when the accordion item is opened
   */
  @Event() openEvent:EventEmitter;

  /**
   * triggered when the content of the accordion item changes
   */
  @Event() contentChanged:EventEmitter;

  componentWillLoad() {
    const children = this.element.parentElement.querySelectorAll('web-accordion-item');
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child == this.element) {
        this.index = i;
      }
    } 
    
    this.mutationObserver = new MutationObserver(() => this.contentChanged.emit());
    this.mutationObserver.observe(this.element, this.mutationObserverConfig);
  }

  componentDidLoad() {
    this.calculateHeight();
  }

  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }    
  }

  /**
   * recalculate Height of accordion item (e.g., when the content of the item changes)
   */
  @Listen('contentChanged')
  recalculateHeight() {
    this.calculateHeight();

    if (this.open) {
      this.transitioning = true;
    }
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

  calculateHeight() {
    this.calculatedHeight = this.element.querySelector('web-accordion-item > :not([slot="title"])').clientHeight;
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