import {Link} from 'react-router-dom'

const PopTag = ({ tagName, tagCNT }) => {
  return (
    <>
      <div className="flex flex-col items-start justify-start gap-2.5">
        {/* DOTO: Tag 컴포넌트 */}
        <div className="inline-flex items-center justify-start gap-2 text-xl font-semibold">
          <Link to={`search/${tagName}`}>
          {`# ${tagName}`}
          </Link>
          
        </div>
        <div className="inline-flex items-center justify-start gap-2">
        {`${tagCNT.toLocaleString()} posted`}
        </div>
      </div>
    </>
  );
};

export default PopTag;
