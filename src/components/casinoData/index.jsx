import { GetContext } from '../context/Context';
import { Content } from '../content';


export const CasinoData = () => {
  const { dataCasino } = GetContext();

  return (
    <>
      <div className='cards'>
        <Content
          data={dataCasino}
        />
      </div>
    </>
  );
};

//.includes(search.toLowerCase()))
