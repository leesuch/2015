module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Container Days Austin 2015",
      description: "Nobody puts Boydy in the container.",
      date: "Feb 2015",
      // If your event is free, just comment this line
      price: "$ 50",
      venue: "Hawaiian Falls",
      address: "18500 N SH 130",
      city: "Pflugerville",
      state: "Texas"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Register now!",
        link: "http://eventtickets.com"
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
      'partners'
      // 'contact'
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
        name: "Registration",
        time: "Friday, 5pm"
      },
      {
        name: "Welcome",
        time: "Friday, 7pm"
      },
      {
        name: "Chuck Norris",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Chuck Norris is a well known expert in the Linux Containerization field",
        company: "Delta Command",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "Escaping from Containers with this one weird kick.",
          description: "Charles Norris (  or Chuck to his friends ) will talk through how he combines his Karate skills with his deep understanding of the Linux Kernel to easily escape from a container and get root shell on the host.",
          time: "Friday, 7:15pm"
        }
      },
      {
        name: "Happy Hour",
        time: "Friday, 8pm to 10pm"
      },
      {
        name: "Breakfast and Early Unconference session ideas.",
        time: "Saturday, 7:30am"
      },
      {
        name: "Official Commencement",
        photo: "themes/yellow-swan/img/speaker.jpg",
        time: "Saturday, 8:30am"
      },
      {
        name: "InfoSec Taylor Swift",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Taylor Swift is a well known Application Security expert.",
        company: "Swift On Security",
        link: {
          href: "http://twitter.com/SwiftOnSecurity",
          text: "@SwiftOnSecurity"
        },
        presentation: {
          title: "Secure that Container",
          description: "How to make your containerized application so secure that not even Chuck Norris could hack it.",
          time: "Saturday, 9:00am"
        }
      },
      {
        name: "Unconference Planning",
        time: "Saturday, 9:45am"
      },
      {
        name: "Unconference Session 1",
        time: "Saturday, 10:00am"
      },
      {
        name: "Unconference Session 2",
        time: "Saturday, 11:00am"
      },
      {
        name: "Lunch and Lean Coffee training.",
        time: "Saturday, 12:00pm"
      },
      {
        name: "Unconference Session 3",
        time: "Saturday, 1:30pm"
      },
      {
        name: "Unconference Session 4",
        time: "Saturday, 2:30pm"
      },
      {
        name: "Closing Circle",
        time: "Saturday, 3:30pm"
      },
      {
        name: "#beerops",
        time: "Saturday, 4:00pm"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Stack Engine",
        logo: "http://stackengine.com/wp-content/uploads/2014/04/StackEngine_Lo_FF1-e1398284107204.jpg",
        url: "http://stackengine.com/"
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