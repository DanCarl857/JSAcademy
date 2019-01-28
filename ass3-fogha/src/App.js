import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="w3-container w3-center w3-padding-32"> 
          <h1><b>MY PORTFOLIO</b></h1>
        </header>

        <div class="w3-col l8 s12">
          <div class="w3-card-4 w3-margin w3-white">
            <img src="/images/two.jpg" alt="Nature" style={{width:'100%'}} />
            <div class="w3-container">
              <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            </div>
          </div>
          <hr />
        </div>
        <div class="w3-col l4">
          <div class="w3-card w3-margin w3-margin-top">
            <div class="w3-container w3-white">
              <h4><b>The Lone Ranger</b></h4>
              <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
            </div>
          </div>
          <hr/>          
          <div class="w3-card w3-margin">
            <div class="w3-container w3-padding">
              <h4>Fun Activities</h4>
            </div>
            <ul class="w3-ul w3-hoverable w3-white">
              <li class="w3-padding-16">
                <img src="/w3images/workshop.jpg" alt="another" class="w3-left w3-margin-right" style={{width:'50px'}} />
                <span class="w3-large">Sports</span><br/>
                <span>Mostly Basketball and a bit of soccer</span>
              </li>
              <li class="w3-padding-16">
                <img src="/w3images/gondol.jpg" alt="another" class="w3-left w3-margin-right" style={{width:'50px'}}/>
                <span class="w3-large">Programming</span><br/>
                <span>I know some HTML5, CSS3, JAVASCRIPT, REACT-JS, NODEJS, and C</span>
              </li> 
              <li class="w3-padding-16">
                  <img src="/w3images/skies.jpg" alt="another" class="w3-left w3-margin-right" style={{width:'50px'}}/>
                <span class="w3-large">Art</span><br/>
                <span>I also do pencil art occassionally</span>
              </li>    
            </ul>
          </div>
          <hr/> 
          <div class="w3-card w3-margin">
            <div class="w3-container w3-padding">   
              <h4>Tags</h4>
            </div>
            <div class="w3-container w3-white text">
              <p>
                <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Travel</span> 
                <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span>  
                <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Family</span>
                <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Sports</span> 
              </p>
            </div>
          </div>
          </div><br/>
            <footer class="w3-container  w3-padding-32 w3-margin-top">
              
            </footer>
        </div>
    );
  }
}

export default App;
