import * as React from 'react';
import {render} from 'react-dom';
import {Header,Blog,Head,Footer} from './Component/Disaster';
import reportWebVitals from './reportWebVitals';
import './index.css'
type CardProps = {
  title: string,
  paragraph: string
}

export const Card = ({ title, paragraph }: CardProps) => <aside>
  <h2>{ title }</h2>
  <p>
    { paragraph }
  </p>
</aside>

export const Dsd=()=><Card title="Welcome!" paragraph="To this example" />

export const APP=()=><><Header/><br/><Head/><br/><Blog/><br/><Footer/></>

render(<APP/>,document.getElementById("root"));
reportWebVitals();
