import React, { Component } from 'react';
import Particles from 'react-particles-js';
export default  class win extends Component{
    
  render(){
    return (

      <Particles
        params={{
	    'particles': {
	        'number': {
	            'value': 80,
	            'density': {
	                'enable': true,
	                'value_area': 800
	            }
	        },
	        'line_linked': {
	            'enable': false
	        },
	        'move': {
	            'speed': 4,
	            'out_mode': 'out'
	        },
	        'shape': {
	            'type': [
	                'images',
	                'star'
	            ],
	            'images': [
	                {
	                    'src': 'https://image.flaticon.com/icons/png/128/1437/1437747.png',
	                    'height': 20,
	                    'width': 23
	                },
	                {
	                    'src': 'http://pngimg.com/uploads/football/football_PNG52752.png',
	                    'height': 20,
	                    'width': 20
	                },
	                {
	                    'src': 'http://pngimg.com/uploads/football/football_PNG52798.png',
	                    'height': 20,
	                    'width': 20
	                }
	            ]
	        },
	        'color': {
	            'value': '#CCC'
            },

	        'size': {
	            'value': 30,
	            'random': false,
	            'anim': {
	                'enable': true,
	                'speed': 240,
	                'size_min': 10,
	                'sync': false
	            }
            },
          
            'move': {
              'direction': 'bottom',
              'out_mode': 'out'
            }

	    },
	    'retina_detect': false
        }} />

    );
  }

}
   