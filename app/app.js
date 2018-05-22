import ReactDOM from './ReactDom'

const element = {
  type: 'h1',
  props: {
    id: 'title',
    children: [
      { type: 'input', props: { value: 'foo', type: 'text' } },
      { type: 'a', props: { href: '/bar' } },
      {
        type: 'span',
        props: {
          children: [{
            type: 'TEXT_ELEMENT',
            props: { nodeValue: 'Foo' },
          }],
        },
      },
    ],
  },
}

ReactDOM.render(element, document.querySelector('#app'))
