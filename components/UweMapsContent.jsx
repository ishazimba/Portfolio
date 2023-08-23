import React from "react";

const UweMapsContent = () => {
  return (
    <section className="content">
      <h2>Project Overview </h2>

      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <p>
              The UWE Maps project is a cross-platform mobile application
              developed using the Flutter SDK for both Android and iOS devices.
              It was designed to provide an interactive and user-friendly campus
              map for new students, staff, and visitors at the Frenchay campus
              of the University of the West of England (UWE).
            </p>
          </div>
        </div>
      </div>
      <h2>Key Features</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <ul>
              <li>
                View current position and navigate through the blocks of the
                Frenchay campus.
              </li>
              <li>
                Enter a desired block/destination and find the route on the map.
              </li>
              <li>
                Utilizes Google Maps APIs to extract map data and details of
                places.
              </li>
              <li>
                Marker indicates source and destination points, while a polyline
                shows the path.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Implementation Process</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <p>
              <b>Primary research:</b> Online questionnaires were conducted
              among UWE students to identify challenges faced in navigating the
              campus and understand the need for an interactive map.
            </p>
            <p>
              <b>Functional and Non-functional requirements:</b> The survey
              responses were analyzed to determine the features and
              specifications of the proposed application.
            </p>
            <p>
              <b>Technical Design: </b>Mock-ups of the application's user
              interface were created using draw.io, planning the design elements
              and layout.
            </p>
            <p>
              <b>Software Development Kit (SDK):</b> Flutter SDK was used to
              develop the application, enabling cross-platform compatibility and
              saving development time.
            </p>
            <p>
              <b>Integrated Development Environment (IDE):</b> Android Studio
              was chosen as the IDE for this project, facilitating the
              development process and allowing testing on Android devices.
            </p>
            <p>
              <b> Programming Language:</b> Dart, a modern object-oriented
              language, was used to develop the user interface and compile it to
              native code for both iOS and Android platforms.
            </p>
            <p>
              <b>Application Programming Interface (API): </b> Google Maps APIs,
              including Geolocation, Geocoding, Places, Distance Matrix, and
              Direction, were integrated to provide map functionality and data
              exchange.
            </p>
          </div>
        </div>
      </div>
      <h2>Technology Stack</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <ul>
              <li>
                Flutter SDK: Cross-platform mobile app development framework.
              </li>
              <li>
                Dart: Programming language used for the application's user
                interface.
              </li>
              <li>
                Google Maps APIs: Integration for map data and functionality.
              </li>
              <li>
                Android Studio: Integrated Development Environment for Android
                platform development.
              </li>
              <li>Xcode: IDE for iOS platform development.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Demo</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <video
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/uwemaps/uwevideo.mov"
              controls
              class="project-video"
            ></video>
            <br />

            <a
              class="link"
              href="https://github.com/ishazimba/uwe_maps"
              target="_blank"
            >
              <p>
                <b>Github Link</b>
              </p>
            </a>
            <br />

            <p>
              This project was part of a master's dissertation, and while it
              successfully addressed the challenges faced by new students in
              navigating the campus, there were certain limitations due to the
              limited timeframe. For example, the application does not provide
              registration or sign-up features and does not store user data. The
              accuracy of block locations depended on the availability of
              registered blocks in Google Places. Nonetheless, the UWE Maps
              application fills a gap by providing a native mobile app focused
              on maps, offering a simple and user-friendly interface for campus
              navigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UweMapsContent;
