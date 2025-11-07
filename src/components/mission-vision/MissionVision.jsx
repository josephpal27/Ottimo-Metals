import './MissionVision.css';

import missionVissionImage from '../../assets/images/mission-vision.jpg';

const MissionVision = () => {
  return (
    <>
      <section className="mission-vision">
        <div className="mission-vision-image">
            <img src={missionVissionImage} alt="Mission and Vision" loading="lazy" />
        </div>
        <div className="mission-vision-content">
            <div className="mv-card-row">
                <div className="mv-card">
                    <span>MISSION</span>
                    <p>Harnessing state-of-the-art technology seamlessly integrated into our production process, Ottimo Metals is resolutely dedicated to ensuring the "ON TIME" delivery of certified, superior-quality products that not only meet but surpass our clients.</p>
                </div>
                <div className="mv-card">
                    <span>VISION</span>
                    <p>At Ottimo Metals, our vision is to establish ourselves as the leading manufacturer and exporter of zinc wires in India and to boost India's industrial growth. We are committed to continually enhancing our production systems,zero-waste production cycle.</p>
                </div>
            </div>
            <span id="secondary-title">OUR CORE VALUES</span>
            <h3>At Ottimo, we're committed to upholding a set of core values that guide everything we do.</h3>
            <div className="mv-counter-row">
                <div className="mv-counter-box">
                    <div className="layer"></div>
                    <span>800</span>
                    <span>Projects <br /> Completed</span>
                </div>
                <div className="mv-counter-box">
                    <div className="layer"></div>
                    <span>672</span>
                    <span>Satisfied <br /> Clients</span>
                </div>
                <div className="mv-counter-box">
                    <div className="layer"></div>
                    <span>757</span>
                    <span>Metal <br /> Works</span>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default MissionVision
