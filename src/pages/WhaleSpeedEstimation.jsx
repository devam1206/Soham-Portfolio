import React from "react";
import { useNavigate } from "react-router-dom";

export default function WhaleSpeedEstimation() {
  const navigate = useNavigate();

  return (
    <div className="py-10 px-4 md:px-8 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/projects")}
          className="mb-6 text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
        >
          ← Back to Projects
        </button>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">
          Speed Estimation for Underwater Animals
        </h1>

        <hr className="border-slate-700 mb-8" />

        {/* Kinematic Sensor Data Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Kinematic Sensor Data Approach</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Our approach to estimating whale swimming speed using kinematic sensor data and a machine learning 
            regression model was derived after comparing various ML models. This method is designed as a robust 
            alternative or complement to video-based speed estimation when video quality is low or unreliable.
          </p>

          <hr className="border-slate-700 mb-6" />

          <h3 className="text-2xl font-semibold text-white mb-4">
            Model Training — Random Forest Regression (Best found)
          </h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6">
            <li>Use extracted features as inputs (<code className="bg-slate-800 px-2 py-1 rounded">X</code>) and known speed (<code className="bg-slate-800 px-2 py-1 rounded">speedJJ</code>) as the target (<code className="bg-slate-800 px-2 py-1 rounded">y</code>).</li>
            <li>Split data into training (80%) and test (20%) sets.</li>
            <li>Train a <strong>Random Forest Regressor</strong> to map kinematic features to swimming speed.</li>
            <li>Evaluate model performance using Mean Squared Error (MSE) and R² score on the test set.</li>
          </ul>

          <p className="text-slate-400 italic mb-3">Evaluation metrics:</p>
          <div className="bg-slate-900 p-4 rounded-lg mb-6">
            <pre className="text-green-400 font-mono text-sm">
Test MSE: 0.0234
Test R²: 0.92
            </pre>
          </div>

          <hr className="border-slate-700 mb-6" />

          <h3 className="text-2xl font-semibold text-white mb-4">Results Visualization</h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6">
            <li>Plot predicted vs actual speed values for the test set to assess model accuracy visually.</li>
          </ul>

          <p className="text-slate-400 italic mb-4">Resulting plot:</p>
          <div className="flex flex-col gap-6 mb-8">
            <img
              src="/images/projects/whale-speed/Actual_vs_Predicted_2.png"
              alt="Actual vs Predicted Speed Plot 1"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/images/projects/whale-speed/actual_Vs_predicted_3.png"
              alt="Actual vs Predicted Speed Plot 2"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        <hr className="border-slate-700 mb-8" />

        {/* Optical Flow Method */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Optical Flow Method</h2>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Optical flow is a computer vision technique that analyzes the apparent motion of objects, surfaces, 
            and edges in a visual scene. It works by calculating how pixel intensities move between consecutive 
            frames of video, essentially creating a "flow field" that represents the velocity of brightness patterns. 
            This flow field appears as a series of vectors indicating the direction and magnitude of movement for 
            pixels or regions within the frame.
          </p>
          <p className="text-slate-300 mb-6 leading-relaxed">
            At its core, optical flow operates on the assumption that pixel intensities remain relatively constant 
            between adjacent frames, allowing algorithms to track their movement. This method is particularly valuable 
            for understanding motion dynamics in video without needing to identify or classify specific objects.
          </p>

          <h2 className="text-3xl font-bold text-white mb-4 mt-8">Speed Estimation Using Optical Flow</h2>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Optical flow provides a powerful framework for estimating speed from video feeds through these key steps:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6 ml-4">
            <li><strong>Motion vector extraction:</strong> Algorithms like Lucas-Kanade calculate displacement vectors between frames, showing how far pixels have moved.</li>
            <li><strong>Camera calibration:</strong> To convert pixel movement to real-world measurements, the system must be calibrated using known reference objects or distances in the scene.</li>
            <li><strong>Scaling and transformation:</strong> The pixel displacement is scaled according to calibration parameters, accounting for perspective effects and camera position.</li>
            <li><strong>Temporal normalization:</strong> Raw displacement is divided by the time interval between frames to calculate velocity.</li>
          </ul>
          <p className="text-slate-300 mb-6 leading-relaxed">
            This approach enables systems to measure vehicle speeds on roadways, analyze athlete performance in sports, 
            monitor crowd flow in public spaces, and quantify various moving objects without needing physical sensors. 
            The non-invasive nature of video-based speed estimation makes it particularly valuable for traffic monitoring, 
            surveillance, and sports analysis applications.
          </p>
        </section>

        {/* Lucas-Kanade Method */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">Method 2.1: Lucas-Kanade Method</h1>
          <p className="text-slate-300 mb-6 leading-relaxed">
            The Lucas-Kanade method is a widely used differential technique for optical flow estimation that was 
            developed by Bruce D. Lucas and Takeo Kanade in 1981. This approach assumes that the flow is essentially 
            constant in a local neighborhood of the pixel under consideration, and solves the basic optical flow 
            equations for all the pixels in that neighborhood, using the least squares method.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4">Core Principles</h2>
          <p className="text-slate-300 mb-3 leading-relaxed">
            The Lucas-Kanade method works based on three key assumptions:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6 ml-4">
            <li>Brightness constancy: The brightness of a pixel doesn't change as it moves from frame to frame</li>
            <li>Temporal persistence: The motion of a surface patch changes slowly over time</li>
            <li>Spatial coherence: Neighboring pixels have similar motion</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Mathematical Formulation</h2>
          <p className="text-slate-300 mb-3 leading-relaxed">
            For a pixel (x,y) at time t, if we denote the intensity as I(x,y,t), then the brightness constancy 
            assumption can be formulated as:
          </p>
          <div className="bg-slate-900 p-4 rounded-lg mb-6 text-center">
            <p className="text-slate-200 font-mono">I(x, y, t) = I(x + dx, y + dy, t + dt)</p>
          </div>

          <p className="text-slate-300 mb-3 leading-relaxed">
            Using Taylor series expansion and assuming small motion, we get the optical flow constraint equation:
          </p>
          <div className="bg-slate-900 p-4 rounded-lg mb-6 text-center">
            <p className="text-slate-200 font-mono">I<sub>x</sub>u + I<sub>y</sub>v + I<sub>t</sub> = 0</p>
          </div>

          <p className="text-slate-300 mb-3 leading-relaxed">Where:</p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6 ml-4">
            <li>I<sub>x</sub> and I<sub>y</sub> are the spatial derivatives of the image intensity</li>
            <li>I<sub>t</sub> is the temporal derivative</li>
            <li>u and v are the x and y components of the optical flow</li>
          </ul>

          <p className="text-slate-300 mb-6 leading-relaxed">
            Since this equation has two unknowns, the Lucas-Kanade method assumes that the flow is constant in a 
            small window. By applying the equation to all pixels in the window and solving the resulting overdetermined 
            system using least squares, we can estimate the flow vector.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Speed Calculation Steps</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3">1. Calibration</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            First, establish a relationship between pixel displacement and real-world distance. This typically 
            requires camera calibration and knowledge of the scene geometry.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">2. Flow Vector Calculation</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Apply the Lucas-Kanade method to obtain flow vectors (u,v) between consecutive frames.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">3. Magnitude Calculation</h3>
          <p className="text-slate-300 mb-3 leading-relaxed">Calculate the magnitude of the flow vector:</p>
          <div className="bg-slate-900 p-4 rounded-lg mb-6 text-center">
            <p className="text-slate-200 font-mono">||V|| = √(u² + v²)</p>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">4. Speed Conversion</h3>
          <p className="text-slate-300 mb-3 leading-relaxed">Convert the flow magnitude to actual speed:</p>
          <div className="bg-slate-900 p-4 rounded-lg mb-6 text-center">
            <p className="text-slate-200 font-mono">Speed = (||V|| × Scale × FPS) / Calibration Factor</p>
          </div>

          <p className="text-slate-300 mb-3 leading-relaxed">Where:</p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6 ml-4">
            <li>Scale is the real-world distance per pixel</li>
            <li>FPS is frames per second of the video</li>
            <li>Calibration Factor adjusts for perspective and camera parameters</li>
          </ul>
        </section>

        {/* Weighted Optical Flow Methods */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">
            Method 2.2: Weighted Optical Flow Methods for Underwater Applications
          </h1>
          
          <a 
            href="https://arxiv.org/html/2407.13159v1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline mb-6 block"
          >
            Reference Paper: arxiv.org/html/2407.13159v1
          </a>

          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-slate-800 rounded-lg overflow-hidden">
              <thead className="bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-white font-semibold">Video</th>
                  <th className="px-6 py-3 text-left text-white font-semibold">What it shows</th>
                  <th className="px-6 py-3 text-left text-white font-semibold">Why it's useful</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-700">
                  <td className="px-6 py-4 text-white font-semibold">Optical Flow Video</td>
                  <td className="px-6 py-4 text-slate-300">Motion direction & speed per pixel (color-coded vectors)</td>
                  <td className="px-6 py-4 text-slate-300">See how the camera or environment is moving</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="px-6 py-4 text-white font-semibold">Weights / Attenuation Map Video</td>
                  <td className="px-6 py-4 text-slate-300">Clarity/confidence of each pixel's motion</td>
                  <td className="px-6 py-4 text-slate-300">Identify reliable vs unreliable regions under water</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">1. Flow Video</h3>
          <h4 className="text-xl font-semibold text-white mb-3">What it represents</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6 ml-4">
            <li>Each pixel has a small <strong>motion vector</strong> → "this spot moved right by 2 pixels and up by 1 pixel."</li>
            <li>The color encodes that:
              <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                <li><strong>Hue (color)</strong> = direction of motion
                  <ul className="list-disc list-inside ml-8 mt-1">
                    <li>e.g. right = red, left = cyan, up = yellow, down = blue.</li>
                  </ul>
                </li>
                <li><strong>Brightness (intensity)</strong> = how <em>fast</em> that motion is (stronger color = faster).</li>
              </ul>
            </li>
            <li>So, if you see colorful ripples in the flow video, that means parts of the scene are moving relative to the camera — or vice versa.</li>
          </ul>

          <h4 className="text-xl font-semibold text-white mb-3">💡 How to read it</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6 ml-4">
            <li>If the camera is moving forward, <strong>background areas (rocks, seafloor)</strong> will show <strong>outward radial flow</strong> (colors radiating away from the center).</li>
            <li>If the animal turns left, the scene will appear to sweep right (color pattern rotates).</li>
            <li>Bubbles or fish that move independently will show odd, inconsistent colors — those are <em>non-rigid</em> motions.</li>
          </ul>

          <p className="text-slate-300 mb-8 leading-relaxed">
            So, the <strong>flow video</strong> is a <em>map of motion</em> — a way to visualize the movement your 
            algorithm detected between consecutive frames.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">2. Weights Video</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            This is a <em>confidence or clarity map</em> — it shows <strong>how much trust</strong> the algorithm 
            places in each pixel's motion measurement.
          </p>

          <h4 className="text-xl font-semibold text-white mb-3">🔍 What it represents</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6 ml-4">
            <li>Water absorbs and scatters light — distant or hazy regions appear bluish, low-contrast, and unreliable for tracking motion.</li>
            <li>The algorithm computes a <strong>transmission map</strong> or <strong>attenuation-aware weight</strong>:
              <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                <li><strong>Bright areas (white/yellow)</strong> → clear, nearby, well-lit regions (high confidence).</li>
                <li><strong>Dark areas (blue/black)</strong> → hazy, far, or low-light regions (low confidence).</li>
              </ul>
            </li>
            <li>These weights are used internally to tell the optical flow system:
              <blockquote className="border-l-4 border-slate-600 pl-4 my-4 italic text-slate-400">
                "Trust the motion here more; down-weight that blurry region over there."
              </blockquote>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-white mb-3">💡 How to read it</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6 ml-4">
            <li>Near objects (rocks, body parts, or camera rig) should appear bright → meaning good data.</li>
            <li>Distant, murky, or low-light background will appear darker → low confidence.</li>
            <li>If the whole frame is dark in the weights video, it means the water is too hazy or lighting is too poor for reliable motion detection at that moment.</li>
          </ul>
        </section>

        <hr className="border-slate-700 mb-8" />

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Results</h2>
          <img
            src="/images/projects/whale-speed/image.png"
            alt="Results"
            className="w-full rounded-lg shadow-lg mb-8"
          />
        </section>

        {/* Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Applications of Optical Flow and Deep Learning Models
          </h2>

          <h3 className="text-2xl font-semibold text-white mb-4">Underwater Fish Detection</h3>
          <img
            src="/images/projects/whale-speed/image 1.png"
            alt="Underwater Fish Detection"
            className="w-full rounded-lg shadow-lg mb-8"
          />

          <h3 className="text-2xl font-semibold text-white mb-4 mt-8">Navigation and Object Avoidance</h3>
          <div className="flex flex-col gap-6 mb-8">
            <img
              src="/images/projects/whale-speed/image 2.png"
              alt="Navigation Example 1"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/images/projects/whale-speed/image 3.png"
              alt="Navigation Example 2"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Animals as Oceanographers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Animals as Oceanographers Applications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Particle Density Estimation (and Size)</h3>
              <p className="text-slate-300">Using optical flow to analyze and estimate particle distribution in marine environments.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Water Clarity Estimation</h3>
              <p className="text-slate-300">Assessing water quality and visibility through motion analysis and light attenuation.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Light Penetration</h3>
              <p className="text-slate-300">Measuring how light propagates through water at different depths and conditions.</p>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <button
          onClick={() => navigate("/projects")}
          className="mt-8 text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  );
}

