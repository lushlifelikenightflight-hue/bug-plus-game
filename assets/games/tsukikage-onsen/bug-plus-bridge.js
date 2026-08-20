(() => {
  const style = document.createElement('style');
  style.textContent = '.bug-plus-return{display:block;width:min(100%,34rem);margin:1rem auto 0;padding:.9rem 1.2rem;border:2px solid #d8f4ff;border-radius:.35rem;background:linear-gradient(135deg,#153d64,#30245f);color:#fff;font:700 clamp(.9rem,2vw,1.15rem)/1.3 sans-serif;letter-spacing:.03em;cursor:pointer;box-shadow:0 0 1.4rem #704dff88}.bug-plus-return:focus{outline:3px solid #fff;outline-offset:3px}';
  document.head.appendChild(style);
  const sync = () => {
    const title = document.querySelector('#state-title');
    const panel = document.querySelector('#game-state .state-panel');
    const cleared = title?.textContent?.includes('夜明けまで生き延びた');
    let button = document.querySelector('.bug-plus-return');
    if (!cleared) { button?.remove(); return; }
    if (!button && panel) {
      button = document.createElement('button'); button.type = 'button'; button.className = 'bug-plus-return';
      button.textContent = 'バグプラス株式会社の世界へ戻る';
      button.addEventListener('click', () => window.parent.postMessage({ type: 'bug-plus:tsukikage-return' }, '*'));
      panel.appendChild(button);
    }
  };
  new MutationObserver(sync).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true });
  sync();
})();
