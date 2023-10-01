// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })

import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "./components/home/hero";
//import Slider from "./components/home/slider";
//import Features from "./components/home/Features";
//import Testimonials from "./components/home/Testimonials";
//import Contacts from "./components/home/contact";
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