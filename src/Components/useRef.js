import { useRef } from 'react';

export default function UseREF() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <div style={{ paddingTop: '70px' }}>
      <div style = {{position:'fixed'}}>
        <button onClick={() => scrollToIndex(0)}>
          Tom
        </button>
        <button onClick={() => scrollToIndex(1)}>
          Maru
        </button>
        <button onClick={() => scrollToIndex(2)}>
          Jellylorum
        </button>
      </div>
      <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'center'}}>
        <ul ref={listRef} style={{width:'100vw'}}>
          <li>
            <img 
            src="https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
              alt="Tom" width='1000vw' height='1000vh'
            />
          </li>
          <li>
            <img
              src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
              alt="Maru" width='1000vw' height='1000vh'
            />
          </li>
          <li>
            <img
              src="https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU"
              alt="Jellylorum" width='1000vw' height='1000vh'
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
