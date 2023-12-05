<template>

<div class="header-display-mobile" data-content-field="site-title">        
          
        <!-- Social -->
        <!-- Title and nav wrapper -->
        <div class="header-title-nav-wrapper">
            <!-- Title -->            
              <div class="header-title" data-animation-role="header-element">                
                  <div class="header-title-text">
                    <div class="row">
                        <div class="column1a">
                            <a id="site-title" href="/" data-animation-role="header-element">IBShadowNet </a>
                        </div>
                        <div class="column2a">
                            <h4 style="white-space:pre-wrap;">LINKS GO HERE ...</h4>
                            <nav>
                                <router-link to="/">Home</router-link>
                                <router-link to="/">Abou2t</router-link>
                                <router-link to="/">Areas of Practice</router-link>
                                <router-link to="/">Blog</router-link>
                                <router-link to="/">Contact Us</router-link>
                                <!-- <router-link to="/google" >Google Home</router-link> -->
                                <!-- <router-link to="https://google.com">Google Home</router-link> -->
                            </nav>

                            <router-view />
                        </div>
                    </div>
                    
                  </div>
              </div>
      
              
              
            
          
            
            <!-- Nav -->
            <div class="header-nav">
              <div class="header-nav-wrapper">
                
              </div>
            </div>
          
          
        </div>
      
        
        <!-- Actions -->
        <div class="header-actions header-actions--right">
          
          

          

        
        

          
          <div class="showOnMobile">
            
          </div>

          
          <div class="showOnDesktop">
            
          </div>

          
        </div>
      
        



<!-- Burger -->
<div class="header-burger

menu-overlay-has-visible-non-navigation-items



no-actions

" data-animation-role="header-element">
<button class="header-burger-btn burger" data-test="header-burger">
  <span hidden class="js-header-burger-open-title visually-hidden">Open Menu</span>
  <span hidden class="js-header-burger-close-title visually-hidden">Close Menu</span>
  <div class="burger-box">
    <div class="burger-inner header-menu-icon-doubleLineHamburger">
      <div class="top-bun"></div>
      <div class="patty"></div>
      <div class="bottom-bun"></div>
    </div>
  </div>
</button>
</div>

      
      
      
      
      
    </div>
  
<!-- (Mobile) Menu Navigation -->
<div class="header-menu header-menu--folder-list "
  data-current-styles="{
&quot;layout&quot;: &quot;navRight&quot;,
&quot;action&quot;: {
&quot;href&quot;: &quot;/contact-us&quot;,
&quot;buttonText&quot;: &quot;Contact Us&quot;,
&quot;newWindow&quot;: false
},
&quot;showSocial&quot;: false,
&quot;socialOptions&quot;: {
&quot;socialBorderShape&quot;: &quot;none&quot;,
&quot;socialBorderStyle&quot;: &quot;outline&quot;,
&quot;socialBorderThickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
},
&quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
&quot;cartStyle&quot;: &quot;cart&quot;,
&quot;cartText&quot;: &quot;Cart&quot;,
&quot;showEmptyCartState&quot;: true,
&quot;cartOptions&quot;: {
&quot;iconType&quot;: &quot;solid-7&quot;,
&quot;cartBorderShape&quot;: &quot;none&quot;,
&quot;cartBorderStyle&quot;: &quot;outline&quot;,
&quot;cartBorderThickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
},
&quot;showButton&quot;: false,
&quot;showCart&quot;: false,
&quot;showAccountLogin&quot;: true,
&quot;headerStyle&quot;: &quot;dynamic&quot;,
&quot;languagePicker&quot;: {
&quot;enabled&quot;: false,
&quot;iconEnabled&quot;: false,
&quot;iconType&quot;: &quot;globe&quot;,
&quot;flagShape&quot;: &quot;shiny&quot;,
&quot;languageFlags&quot;: [ ]
},
&quot;mobileOptions&quot;: {
&quot;layout&quot;: &quot;logoLeftNavRight&quot;,
&quot;menuIcon&quot;: &quot;doubleLineHamburger&quot;,
&quot;menuIconOptions&quot;: {
&quot;style&quot;: &quot;doubleLineHamburger&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
}
},
&quot;dynamicOptions&quot;: {
&quot;border&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
}
},
&quot;solidOptions&quot;: {
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 100.0
},
&quot;border&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;dropShadow&quot;: {
&quot;enabled&quot;: false,
&quot;blur&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 30.0
},
&quot;spread&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;distance&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;backgroundColor&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;white&quot;,
&quot;alphaModifier&quot;: 1.0
}
},
&quot;navigationColor&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;gradientOptions&quot;: {
&quot;gradientType&quot;: &quot;faded&quot;,
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 90.0
},
&quot;border&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;dropShadow&quot;: {
&quot;enabled&quot;: false,
&quot;blur&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 30.0
},
&quot;spread&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;distance&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;backgroundColor&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;white&quot;,
&quot;alphaModifier&quot;: 1.0
}
},
&quot;navigationColor&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;dropShadowOptions&quot;: {
&quot;enabled&quot;: false,
&quot;blur&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
},
&quot;spread&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;distance&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;borderOptions&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;showPromotedElement&quot;: false,
&quot;buttonVariant&quot;: &quot;primary&quot;,
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 100.0
}
}"
  data-section-id="overlay-nav"
  data-show-account-login="true"
  data-test="header-menu">
  <div class="header-menu-bg theme-bg--primary"></div>
  <div class="header-menu-nav">
    <nav class="header-menu-nav-list">
      <div data-folder="root" class="header-menu-nav-folder">
        

        <div class="header-menu-actions social-accounts"></div>
        
        
      </div>
    </nav>
  </div>
</div>



    <!-- <main id="page" class="container" role="main"> -->
      
        
<!-- < class="sections" id="sections" data-page-sections="6567f3c299db090a62a4ea12"> -->


  
  





<section
data-test="page-section"

data-section-theme="light"
class='page-section 
  
    full-bleed-section
    layout-engine-section
  
  background-width--full-bleed
  
    
      section-height--custom
    
  
  
    content-width--wide
  
  horizontal-alignment--center
  vertical-alignment--middle
  
    
  
  
  light'

data-section-id="6567f3c299db090a62a4ea16"

data-controller="SectionWrapperController"
data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
&quot;customSectionHeight&quot;: 10,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionTheme&quot;: &quot;light&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}"
data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: null,
&quot;divider&quot;: null,
&quot;typeName&quot;: &quot;page&quot;
}"
data-animation="none"
data-fluid-engine-section
 

   style="min-height: 10vh;" 


>
<div
  class="section-border" 
  
>
  <div class="section-background">
  
    
  
  </div>
</div>
<div
  class='content-wrapper'
  style='
    
      
        
        
        padding-top: calc(10vmax / 10); padding-bottom: calc(10vmax / 10);
      
    
  '
>
  <div class="content">
    
    
    
    
    <div data-fluid-engine="true"><div class="fluid-engine fe-6567f3c299db090a62a4ea15"><div class="fe-block fe-block-7661ec9304b50110b622"><div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-7661ec9304b50110b622"><div class="sqs-block-content">

<div class="sqs-html-content">
<h2 style="white-space:pre-wrap;">Areas of Practice</h2>
</div>



</div></div></div><div class="fe-block fe-block-faaa382be02c1d3346a9"><div class="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-faaa382be02c1d3346a9"><div class="sqs-block-content"><hr /></div></div></div><div class="fe-block fe-block-9bc7ba1f9844558ce8e1"><div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-9bc7ba1f9844558ce8e1"><div class="sqs-block-content">

<div class="row">
  <div class="column1">
    <h4 style="white-space:pre-wrap;">Music</h4>
  </div>
  <!-- <div class="sqs-html-content"> -->
    <div class="column2">
        <h4 style="white-space:pre-wrap;">The world of music is ever growing and evolving, and we’re not just talking about sound trends. With the consistent introduction of varying revenue streams and distribution channels, the opportunity for profit grows, but so does the complexity. We take pride in clearly explaining and navigating the often foggy landscape of entertainment law and its relationship to music industry professionals of all types. We help our clients draft and negotiate contracts relating to recording, publishing, licensing and distribution, sponsorship and merchandising.</h4>
    </div>  
</div>



</div></div></div><div class="fe-block fe-block-eaee65bb74b8bca70321"><div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-eaee65bb74b8bca70321"><div class="sqs-block-content">


</div></div></div><div class="fe-block fe-block-1b10656fe0f9710da8df"><div class="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-1b10656fe0f9710da8df"><div class="sqs-block-content"><hr /></div></div></div><div class="fe-block fe-block-617e78fd6558ddc3e0c8"><div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-617e78fd6558ddc3e0c8"><div class="sqs-block-content">



<div class="row">
  <div class="column1" >
    <h4 style="white-space:pre-wrap;">Television, Film &amp; Theater</h4>
  </div>
  <!-- <div class="sqs-html-content"> -->
    <div class="column2">
        <h4 style="white-space:pre-wrap;">The way people consume entertainment is constantly in flux, so the laws must adapt quickly. Harris Ingram strives to anticipate these changes so you can focus more on creating a performance of a lifetime. Among our clients are actors, directors, unions, agencies, writers, animators, and many other industry talents. We draft and negotiate development, production, financing, and sales &amp; distribution agreements. Tailoring each contract according to a project’s scope, size, and budget, we secure the appropriate creative rights for all talents involved.</h4>
    </div>  
</div>

</div></div></div><div class="fe-block fe-block-8b87fd50e12af54dfd96"><div class="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-8b87fd50e12af54dfd96"><div class="sqs-block-content"><hr /></div></div></div><div class="fe-block fe-block-45530906cb7c018d6a9b"><div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-45530906cb7c018d6a9b"><div class="sqs-block-content">


</div></div></div></div></div>
  </div>

</div>

</section>

<!-- </article>      -->
<section class="sections" id="footer-sections" data-footer-sections>
<footer
data-test="page-section"

data-section-theme="light-bold"
class='page-section 
  
    full-bleed-section
    layout-engine-section
  
  background-width--full-bleed
  
    
      section-height--custom
    
  
  
    content-width--wide
  
  horizontal-alignment--center
  vertical-alignment--middle
  
    
  
  
  light-bold'

data-section-id="6567e7b28cc3d0772d8d60d5"

data-controller="SectionWrapperController"
data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
&quot;customSectionHeight&quot;: 10,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionTheme&quot;: &quot;light-bold&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}"
data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: null,
&quot;divider&quot;: null,
&quot;typeName&quot;: &quot;page&quot;
}"
data-animation="none"
data-fluid-engine-section
 

   style="min-height: 10vh;" 
>



<div
  class="section-border" 
  
>
  <div class="section-background">
  
    
  
  </div>
</div>
<div
  class='content-wrapper'
  style='padding-top: calc(10vmax / 10); padding-bottom: calc(10vmax / 10);'
>


</div>
</footer>
</section>
    
    
    
    
    
    
</template>


<style scoped>


/* $$$$$---FOR PAGE NAIGATION LINKS---$$$$$ */

nav {
  width: 100%;
  font-size: 8px;
  margin-top: 2rem;
  display: inline-block;
}

/* nav a.router-link-exact-active {
  font-weight: bold;
  font-size: 14px;
  border: 5px solid blue;
  color: gold;
  background-color: transparent;
} */

nav a.router-link-active {  
  background-color: transparent;
  color: black;		
  margin: 5px 3px; 
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

nav a.router-link-exact-active { 
  background-color: transparent;
  color: black;		
  margin: 5px 3px;  
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: goldenrod;
}

nav a:hover {
  background-color: transparent;
  color: goldenrod;
}

nav a {
  display: inline-block;
  background-color: transparent;
  color: black;		
  margin: 5px 3px; 
  
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

/* $$$$$----FOR "<a>IBSHADOWNET</a>---$$$$$$ */


a, .green {
  color: black;
  text-decoration: none;
  transition: 0.4s;
    font-size: 60px;
    font-family: Times, Times New Roman, serif;
}
a:visited, .green {
  color: goldenrod;
  text-decoration: none;
  transition: 0.4s;
    font-size: 60px;
    font-family: Times, Times New Roman, serif;
}
a:hover, .green {
  color: maroon;
  text-decoration: none;
  font-variant: small-caps;
  transition: 0.4s;
    font-size: 60px;
    font-family: Times, Times New Roman, serif;
}
/* a, .green {
    text-decoration: none;
    color: black;
    transition: 0.4s;
    font-size: 60px;
    font-family: Times, Times New Roman, serif;
} */



/* $$$$$----FOR "AREAS OF PRACTIS-< h2>-HEADINGS--$$$$$$ */


h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    font-family: Times, Times New Roman, serif;
    font-size: xx-large;
}


/* $$$$$---FOR-<h4>-HEADINGS--$$$$$$ */


h4 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    font-family: Times, Times New Roman, serif;
    font-size: large;
}




/* $$$$$$$--FOR RESPONSIVE 2 COLUMN CONTENT ROW $$$$$$$$ */


* {
  box-sizing: border-box;
}

/* Create two equal columns that floats next to each other */
.column1 {
  float: left;
  width: 30%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

.column2 {
  float: right;
  width: 70%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

.column1a {
  float: left;
  width: 70%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

.column2a {
  float: right;
  width: 30%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}


/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}

</style>