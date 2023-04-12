import React from 'react';
import {marked} from 'marked';
import './App.css';

// Allows line breaks with return button
marked.setOptions({
  breaks: true
});

// Set a function to be used by the marked Renderer, the bit that takes markdown and translates it to html.
const renderer = new marked.Renderer();

function App() {

  const [text,setText]=React.useState(placeholder);

  

  return (
    <div>
      <h1 className='title text-center py-3'>Markdown Previewer</h1>
      <div className='appWrap contanier'>
        <div className='editorWarp container'>
          <Toolbar text='Editor' />
          <Editor markdown={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='previewerWarp container'>
          <Toolbar text='Previewer' />
          <Previewer markdown={text}/>
          <p className='text-center'>by Revenco Daniel</p>
        </div>
      </div>
    </div>
  );
}

const Toolbar = props => {
  return(
      <div className='toolbar rounded-top'>{props.text}</div>
  );
};

const Editor= props =>{
  return (
      <textarea type='text' id='editor' className='rounded-bottom' rows='10' value={props.markdown} onChange={props.onChange} />
  );
};

const Previewer= props =>{
  return (
      <div className='rounded-bottom mb-4' id='preview'
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, { renderer: renderer })
        }}>  
      </div>
  );
};

const placeholder=`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

export default App;
