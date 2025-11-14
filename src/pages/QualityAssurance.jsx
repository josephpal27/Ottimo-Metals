import '../css/QualityAssurance.css';

import homeBanner from '/images/banners/banner.avif';

const QualityAssurance = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src={homeBanner} alt="Home Banner" loading="eager" />
            </section>
        </>
    )
}

export default QualityAssurance
