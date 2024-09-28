import { Component, Prop, h } from '@stencil/core';
@Component({
  tag: 'dynamic-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class Dynamic {


  render() {
    return (<div>
      <div>Hello, World! I'm  a second component loaded dinamic</div>
      </div>
  
  );
    }
}
