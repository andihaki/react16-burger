import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => (
  <div>
    <h1>Oops....</h1>
    <p>Try <Link href='/'><a>home</a></Link></p>    
  </div>
);

export default indexPage;