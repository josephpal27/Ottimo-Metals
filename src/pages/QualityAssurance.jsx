import '../css/QualityAssurance.css';

import homeBanner from '/images/banners/banner.avif';

const QualityAssurance = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src={homeBanner} alt="Home Banner" loading="eager" />
            </section>

            {/* Quality Assurance */}
            <div className="quality-assurance">
                <h2>ZINC WIRES</h2>
                <div className="line"></div>
                <div className="quality-cards-row">
                    <div className="quality-box">
                        <span>01</span>
                        <h3>QUALITY</h3>
                        <p>Experience superior performance with our zinc wires manufactured to the highest standards with quality testing machines:</p>
                        <div className="quality-list">
                            <p>German spectrometer to test chemical composition</p>
                            <p>European standard tensile testing machine</p>
                            <p>On site chemical laboratory</p>
                            <p>State of the art European plant</p>
                        </div>
                    </div>
                    <div className="quality-box">
                        <span>02</span>
                        <h3>LARGE-SCALE AUTOMATED MANUFACTURING</h3>
                        <p>From zinc ingots to drawing and packaging zinc wires, our manufacturing process is fully automated.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QualityAssurance
