const expect = require('chai').expect;
const sinon = require('sinon');
const ChatApp = require('./../src/lib/ChatApp');

describe('ChatApp', () => {
  before(() => {
    this.app = new ChatApp('Title');
  });

  describe('#constructor()', () => {
    it('should creates a chat app', () => {
      expect(this.app.title).to.equal('Title');
    });

    it('should emit message event', (done) => {
      const eventSpy = sinon.spy();
      setTimeout(() => {
        expect(eventSpy.called).to.equal(true);
        done();
      }, 1000);
      this.app.on('message', eventSpy);
    });
  });

  describe('#close()', () => {
    it('should emit close event', (done) => {
      const eventSpy = sinon.spy();
      setTimeout(() => {
        expect(eventSpy.called).to.equal(true);
        expect(eventSpy.calledOnce).to.equal(true);
        done();
      }, 1000);
      this.app.on('close', eventSpy);
      this.app.close();
    });
  });
});
