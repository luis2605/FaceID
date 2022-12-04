import React, { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import Rank from "./components/rank/Rank";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import matrix from "./assets/img/matrix.jpg";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import FormPhotoContainer from "./components/FormPhotoContainer/FormPhotoContainer";

const App = () => {
  const [input, setInput] = useState("");
  const [boxes, setBoxes] = useState({});
  const [boxesCalculated, setBoxesCalculated] = useState({});

  //get the input from the input element
  const onInputChange = (event) => {
    let validEntry = event.target.value.trim().length;
    let https =
      event.target.value.includes("https") ||
      event.target.value.includes("http");
    if (validEntry > 10 && https) {
      console.log(https);
      setInput((prev) => {
        return (prev = event.target.value);
      });
    } else return 0;
  };
  //detect button

  const onBtnSubmit = () => {
    console.log(input);

    //help me => user_id can be found in multiple ways, one way is in https://portal.clarifai.com/settings/profile
    const USER_ID = "luisrondon";

    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    // help me => PAT can be found in https://portal.clarifai.com/settings/authentication (create one if necessary!)
    const PAT = "978ded0f14b04efb9b492f6eab690384";

    // help me => App Id is just the name of your app on the portal.
    const APP_ID = "faceApp";

    // Change these to whatever model and image input you want to use
    // help me => https://help.clarifai.com/hc/en-us/articles/1500007677141-Where-to-find-your-Model-IDs-and-Model-Version-IDs
    const MODEL_ID = "general-image-detection";
    const MODEL_VERSION_ID = "1580bb1932594c93b7e2e04456af7c6f";

    const IMAGE_URL = input;

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBoxes([
          result.outputs[0].data.regions.map((box) => {
            return box.region_info.bounding_box;
          }),
        ]);
      })

      .catch((error) => console.log("error", error));

    const calculateBoxLocation = (data) => {
      const image = document.getElementById("inputImage");
      const width = Number(image.width);
      const height = Number(image.height);

      console.log(data[0]);
      setBoxesCalculated((prev) => {
        return (prev = data[0].map((box) => {
          return {
            leftCol: box.left_col * width,
            topRow: box.top_row * height,
            rightCol: width - box.right_col * width,
            bottomRow: height - box.bottom_row * height,
          };
        }));
      });
    };
    if (boxes.length > 0) {
      calculateBoxLocation(boxes);
    } else return;
  };

  //this is related to the particles
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 30,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 100,
                duration: 2,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          backgroundMask: {
            enable: true,
            cover: {
              value: {
                r: 255,
                g: 255,
                b: 255,
              },
            },
          },
          retina_detect: true,
          background: {
            color: "#ffffff",
            image:
              // "url('https://images2.alphacoders.com/778/thumb-1920-77840.jpg')",
              `url(${matrix})`,
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
      <Navigation />
      <Logo />
      <FormPhotoContainer>
        <Rank />
        <ImageLinkForm
          onInputChange={onInputChange}
          onBtnSubmit={onBtnSubmit}
        />
      </FormPhotoContainer>

      <FaceRecognition onBoxesCalculated={boxesCalculated} onInput={input} />
    </div>
  );
};
export default App;
