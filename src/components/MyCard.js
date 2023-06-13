import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function MyCard(props) {
  const myProp = props;
  return (
    <>
    <div class = "pt-12 flex justify-around place-content-evenly">
      
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={props.imag} alt="" class = "w-96 h-52"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{props.title}</div>
    <p class="text-gray-700 text-base">
      {props.description}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.tags}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.time}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.author}</span>
  </div>
  <div class = "pb-4">
    <a href={props.id}>Continue Reading &rarr;</a>
    
  </div>
</div></div>
    </>
  )
}
