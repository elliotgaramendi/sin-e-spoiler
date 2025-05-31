import usePremieres from '../../hooks/usePremieres';
import useWindowSize from '../../hooks/useWindowSize';
import LoadingSkeleton from '../widgets/LoadingSkeleton';
import PremieresSlider from '../widgets/PremieresSlider';

const PremieresSection = () => {
  const { premieresList, isLoading, loadError } = usePremieres();
  const { width } = useWindowSize();

  return (
    <section id="premieres" className="section">
      <div className="container d-flex f-direction-column g-8">
        {loadError ? (
          <p className="text text--lg t-align-center">Error loading premieres.</p>
        ) : (
          <>
            <h2 className="title c-primary t-align-center">Premieres 🎉</h2>
            {isLoading ? (
              <LoadingSkeleton
                quantity={width >= 768 ? 5 : 2}
                count={1}
                width="100%"
                height={width >= 768 ? 400 : 350}
                wrapperClasses="d-flex g-8"
              />
            ) : (
              <PremieresSlider items={premieresList} />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PremieresSection;
