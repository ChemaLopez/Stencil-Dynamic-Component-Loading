import { Component, Element, h } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Element() 
  el: HTMLElement;  // El decorador @Element obtiene el DOM del componente


  componentDidLoad() {
    //@ts-ignore
    import('http://localhost:3333/build/dynamic-component.entry.js')
      .then(module => {
        
        const dynamicComponent = document.createElement('dynamic-component')
        this.el.shadowRoot.appendChild(dynamicComponent)
      })
      .catch(error => {
        console.error('Error al cargar el módulo:', error);
      });
  }

  render() {
    return (
      <div>
        
      <div>Hello, World! I'm first component</div>
      </div>

    )
  }
}


