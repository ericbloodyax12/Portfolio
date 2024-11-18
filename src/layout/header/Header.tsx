import React from 'react';

type THeaderProps = {}

export const Header: React.FC<THeaderProps> = (props) => {
    return (
       <header>
           <a href={""}>
               <img/>
           </a>

           <nav>
               <ul>
                   <li><a href="">Home</a></li>
                   <li><a href="">Skills</a></li>
                   <li><a href="">Works</a></li>
                   <li><a href="">About Me</a></li>
                   <li><a href="">Contacts</a></li>
               </ul>
           </nav>
       </header>
    );
}

