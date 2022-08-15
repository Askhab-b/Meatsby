import Helmet from '../components/Helmet/Helmet.js';

const SiteByDreamTeam = () => {

  return (
    <>
      <Helmet title="Главная" />

<div class="row">
  
  <div class="col-md-12" id="main_header" align="center" >
  </div>
  
  <br/><br/>
  
  <div class="col-md-12" align="center"> 
      <div class="row">
        <h2> 
          <u id="photos">                 
            PHOTOS 
          </u> 
        </h2>
      </div>
   </div>
   
  <div class="cards-list">
  
    <div class="card 1">
      <div class="card_image"> 
        <img src="https://www.everythingcebu.com/wp-content/uploads/2014/04/Grilled-Seafood-Platter_61-679x448.jpg" /> </div>
      <div class="card_title title-black">
          
      </div>
    </div>

  <div class="card 2">
      <div class="card_image">
        <img src="https://4.bp.blogspot.com/-bixItnassaE/W3pgDkHUosI/AAAAAAAA88s/SGg4HkILbV05oDXahiFy0p9TlA4UmNRIgCLcBGAs/s1600/SAM_0440-1.jpg" />
        </div>
      <div class="card_title title-white">
      </div>
    </div>

  <div class="card 3">
    <div class="card_image">
      <img src="https://www.zenrooms.com/blog/wp-content/uploads/2020/02/shutterstock_506898349-672x372.jpg" />
    </div>
    <div class="card_title">
    </div>
  </div>
  
    <div class="card 4">
      <div class="card_image">
        <img src="https://www.foodfindsasia.com/wp-content/uploads/2015/04/Filipino-foods.jpg" />
        </div>
      <div class="card_title title-black">
      </div>
    </div>
    
    <div class="card 1">
        <div class="card_image">
        <img src="https://cebubulletin.ph/wp-content/uploads/2020/10/lechon.jpg" />
        </div>
        <div class="card_title title-black">

        </div>
      </div>

      <div class="card 2">
        <div class="card_image">
          <img src="https://www.y101fm.com/images/articleimages/123016/2017-1-1-RESTAU-cebu-best-main.jpg" />
        </div>
        <div class="card_title title-white">
        </div>
      </div>

      <div class="card 3">
        <div class="card_image">
          <img src="https://static.tripzilla.com/thumb/1/7/151319_800x.jpg" />
        </div>
        <div class="card_title">
        </div>
      </div>

      <div class="card 4">
        <div class="card_image">
          <img src="https://3d-universal.com/en/blogs/wp-content/uploads/2020/08/1-cookpub-modern-korean-bistro-bar.jpg"/>
        </div>
        <div class="card_title title-black">
        </div>
      </div>
    </div>

  <section id="course_section">

    <div class="col-md-12" align="center">
      <div class="row">
        <h2>
          <u id="photos">
            MENU
          </u>
        </h2>
      </div>
    </div>

    <div class="container">

    </div>

  </section>
  <section id="about_section">

    <div class="col-md-12" align="center">
      <div class="row">
        <h2>
          <u id="photos">
            ABOUT
          </u>
        </h2>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <h2>About</h2>
        <div class="block"></div>
        <p> Best Foods that you will see there in the Cebu. </p>
      </div><br />
      <div class="row">
        <div class="six columns">
      
        </div><br />
        <div class="row">
          <div class="six columns">
            <h3><span class="typcn typcn-cog-outline icon"></span>Our Vision</h3>
            <p>my vision is all about why food concepts matters and how it can influence people want to by it. </p>
          </div><br />
          <div class="six columns">
            <h3><span class="typcn typcn-lightbulb icon"></span>Our Mission</h3>
            <p> My mission of Food is I assure that you never, regret and Enjoy it. </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact_section">
    
    <div class="col-md-12" align="center">
      <div class="row">
        <h2>
          <u id="photos">
            CONTACT US
          </u>
        </h2>
      </div>
    </div>
    <br/>
    <div class="col-md-12 container" align="center">
      <div class="row">
        <ul>
          <li>Email Address: ladymarie@gmail.com <br/> </li>
          <li>Tel#: +911<br/> </li>
          <li>Company Address: Ladymarie@gmail.com<br/></li>
        </ul>
      </div>
    </div>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe width="400" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Voctech%20Senior%20High%20School%20(Cebu%20Technical%20Vocational%20Training%20and%20Assessment%20Academy,%20Inc.),%20Cebu%20South%20Road,%20Cebu%20City,%20Cebu&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
</div></div>
    
    
  </section>
  <section id="feedback" >
     <div class="col-md-12 container" align="center">
      <div class="row">
        <h2>
          <u id="photos">
            Feedback
          </u>
        </h2>
      </div>
    </div>
    <br/>
      <div class="row">
        <label> Email Address :</label>
        <input type="email" class="form-control" id="email" name="email" />
        <br/><br/>
        <label> Tel No.</label>
        <input type="text" id="tel_no" name="tel_no" />
        <br/><br/>
        <label>Type your feedback here</label><br/>
        <textarea id="feedback" name="feedback"> </textarea><br/>
        <button id="submit" > Submit </button>
      </div>
  </section>
</div>

    </>
  );
};

export default SiteByDreamTeam;
