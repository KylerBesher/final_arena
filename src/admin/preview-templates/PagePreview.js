import React from 'react';

const PagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  
  return (
    <div className="content">
      <h1>{data.title}</h1>
      <div>{data.description}</div>
      {data.sections?.map((section, index) => {
        switch (section.type) {
          case 'richText':
            return (
              <div key={index} className="content">
                {section.content}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default PagePreview; 