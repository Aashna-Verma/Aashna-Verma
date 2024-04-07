import './Hero.scss';
import { useEffect } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sparkle from '../assets/sparkle.svg';

export default function Hero({ className }) {

    useEffect(() => {
        const myText = new SplitType('.intro-name');

        gsap.to('.char', {
            y: 0,
            stagger: 0.1,
            delay: 1.5,
            duration: .1
        });

        gsap.to('.sparkle', {
            width: '6em',
            height: '7em', // Example scale value, adjust as necessary
            delay: 2.5,
            duration: 3,
            ease: 'elastic.out(1,0.4)'
        });

        gsap.registerPlugin(ScrollTrigger);

        gsap.to('#gradient', {
            scrollTrigger: {
              trigger: '#home-intro',
              start: '40% 30%', // Starts the check when the top of #home-intro hits the bottom of the viewport
              end: '80% 30%%', // Ends (triggers the animation) when the bottom of #home-intro exits the top of the viewport
              markers: false, // Change to true to see the trigger area
              scrub: true,
            },
            width: '85vh', 
            height: '85vh', 
            duration: 1,
            borderRadius: '50%',
          });

    });

    return (
        <div className={className} id='home-intro' >
            <div id='intro-words'>
                <div className='clipy intro-name'>Aashna</div>
                <div className='clipy intro-name'>VERMA</div>
            </div>
            <div className='intro-sparkle'>
                <img className='sparkle' src={sparkle} />
            </div>
        </div>
    );
}