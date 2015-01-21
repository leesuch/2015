module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Container Days Austin 2015",
      description: "Nobody puts Boydy in the container.",
      date: "March 27 and 28, 2015",
      
      // If your event is free, just comment this line
      price: "$60",
      venue: "Hawaiian Falls",
      address: "18500 N SH 130",
      city: "Pflugerville",
      state: "Texas"
    },
    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Register now!",
        link: "https://www.eventbrite.com/e/container-days-austin-2015-tickets-15159477405"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Sign In",
        time: "Friday, 6:00pm"
      },
      {
        name: "Boyd Hemphill",
        photo: "https://pbs.twimg.com/profile_images/3525655355/04dafec967eea72a64c815f4af0c68a4_400x400.jpeg",
        bio: "In his capacity as Evangelist at StackEngine, Boyd dreamed of a DevOps Days style conference for the containerization revolution.",
        presentation: {
          title: "Welcome to Container Days",
          description: "Welcome to the first ever Container Days.",
          time: "Friday, 6:30pm"
        },
        link: {
          href: "https://twitter.com/behemphi",
          text: "@behemphi"
        }
      },
      {
        name: "Guest Speaker",
        photo: "themes/yellow-swan/img/guestspeaker_yellow.jpg",
        presentation: {
          title: "Opening Guest Speaker",
          description: "Our guest speaker is a respected pillar in the containerization field and is eager to share key insights and expertise.",
          time: "Friday, 6:45pm"
        }
      },
      {
        name: "Ernest Mueller",
        photo: "https://pbs.twimg.com/profile_images/1781349516/ernest_400x400.JPG",
        presentation: {
          title: "Opening Circle: Topics and Timeslots",
          description: "Creation of Saturdays topics and schedule",
          time: "Friday, 7:45pm"
        },
        link: {
          href: "https://twitter.com/ernestmueller",
          text: "@ernestmueller"
        }
      },
      {
        name: "Social Hour",
        time: "Friday, 9:00pm"
      },
      {
        name: "Breakfast and Sign In",
        time: "Saturday, 9:00am"
      },
      {
        name: "Ernest Mueller & Boyd Hemphill",
        photo: "https://pbs.twimg.com/profile_images/1781349516/ernest_400x400.JPG",
        presentation: {
          title: "Opening Circle Reprise",
          description: "Rules, Leading a Talk, Attending a Talk",
          time: "Saturday, 9:15am"
        }
      },
      {
        name: "Guest Speaker",
        photo: "themes/yellow-swan/img/guestspeaker_yellow.jpg",
        presentation: {
          title: "Day Two Guest Speaker",
          description: "Our guest speaker is a respected pillar in the containerization field and is eager to share key insights and expertise.",
          time: "Saturday, 9:30am"
        }
      },
      {
        name: "Unconference Session 1",
        time: "Saturday, 10:30am"
      },
      {
        name: "Unconference Session 2",
        time: "Saturday, 11:30am"
      },
      {
        name: "Lunch and Lean Coffee training.",
        time: "Saturday, 12:30pm"
      },
      {
        name: "Unconference Session 3",
        time: "Saturday, 2:00pm"
      },
      {
        name: "Unconference Session 4",
        time: "Saturday, 3:00pm"
      },
      {
        name: "Closing Circle",
        time: "Saturday, 4:00pm"
      },
      {
        name: "#beerops",
        time: "Saturday, 4:30pm"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "StackEngine",
        logo: "http://stackengine.com/wp-content/uploads/2014/04/StackEngine_Lo_FF1-e1398284107204.jpg",
        url: "http://stackengine.com/"
      },
      {
        name: "W2O",
        logo: "themes/yellow-swan/img/w2o_logo.jpg",
        url: "http://w2ogroup.com/"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Stack Engine",
        logo: "http://stackengine.com/wp-content/uploads/2014/04/StackEngine_Lo_FF1-e1398284107204.jpg",
        url: "http://stackengine.com/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};