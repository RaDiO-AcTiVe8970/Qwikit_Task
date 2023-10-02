import Hero from "./components/home/hero";
import dynamic from 'next/dynamic';
import Products from "./components/home/product";

const _Layout = dynamic(() => import('./components/layout/_layout'))
const _Title = dynamic(() => import('./components/layout/_title'))

export default function Home() {
  return (
    <>
      <_Title title="Qwikit.ca" />
      <_Layout>
      <Hero /> 
      <Products /> 
      </_Layout>
    </>
  );
}