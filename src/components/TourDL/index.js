import React from 'react';
import './style.css';
import TourDLTitle from './TourDLTitle';

export default function TourDL() {
  return (
    <>
      <div className="card">
        <TourDLTitle />
        <div class="row">
          <div class="col-md-12">
            <div class="container">
              <div class="content1">
                {' '}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="css-uk6cul"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                </svg>{' '}
                6 ngày 3 đêm
              </div>
              <div class="content2">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                  <path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z" />
                </svg>
              </div>
            </div>
            <div class="container">
              <div class="content1">Nội dung 1</div>
              <div class="content2">Nội dung 2</div>
            </div>
            <div class="container">
              <div class="content1">Nội dung 1</div>
              <div class="content2">Nội dung 2</div>
            </div>
          </div>
        </div>
        <h3 style={{ textAlign: 'right', fontSize: '1.5rem', color: '#F59321' }}>8.000.0000 vnd</h3>
      </div>
    </>
  );
}
