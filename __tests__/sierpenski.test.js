/**
 * @jest-environment jsdom
 */

import {jest} from '@jest/globals';
import Sierpenski from './../sierpenski';

let canvas, context;

beforeEach(() => {
  canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;

  context = canvas.getContext('2d');
  context.closePath = jest.fn();
  context.lineTo = jest.fn();
});

describe('Draws the correct number of triangles', () => {
  it('When iterations=0', () => {
    let s = new Sierpenski(canvas);
    s.render(0);
    expect(context.closePath).toHaveBeenCalledTimes(1);
  });
  
  it('When iterations=1', () => {
    let s = new Sierpenski(canvas);
    s.render(1);
    expect(context.closePath).toHaveBeenCalledTimes(3);
  });

  it('When iterations=2', () => {
    let s = new Sierpenski(canvas);
    s.render(2);
    expect(context.closePath).toHaveBeenCalledTimes(9);
  });

  it('When iterations=10', () => {
    let s = new Sierpenski(canvas);
    s.render(10);
    expect(context.closePath).toHaveBeenCalledTimes(59049);
  });
});

describe('Draws the correct coordinates of triangles', () => {
  it('When iterations=0', () => {
    let s = new Sierpenski(canvas);
    s.render(0);
    expect(context.lineTo).toHaveBeenCalledTimes(3);
    expect(context.lineTo).toHaveBeenCalledWith(0, -43.30127018922193);
    expect(context.lineTo).toHaveBeenCalledWith(50, 43.30127018922193);
    expect(context.lineTo).toHaveBeenCalledWith(-50, 43.30127018922193);
  });

  it('When iterations=2', () => {
    let s = new Sierpenski(canvas);
    s.render(2);
    expect(context.lineTo).toHaveBeenCalledTimes(27);
    expect(context.lineTo).toHaveBeenCalledWith(-37.5, 21.650635094610966);
    expect(context.lineTo).toHaveBeenCalledWith(-25, 43.30127018922193);
    expect(context.lineTo).toHaveBeenCalledWith(-50, 43.30127018922193);
  });
})