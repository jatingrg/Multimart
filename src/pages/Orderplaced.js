import React from 'react';

export default function Orderplaced() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img 
        src="https://imgs.search.brave.com/Iw3vadQ-2jylMMbNmRHgS3h2uiSoUj4-__CocFzGPH4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC82Mi80NS9n/cmVlbi1jaXJjbGUt/Y2hlY2stbWFyay1j/b25maXJtYXRpb24t/dGljay1tYXJrcy12/ZWN0b3ItMjE4MjYy/NDUuanBn" 
        alt="Order Success"
        style={{ width: '100px', height: '100px', marginBottom: '20px' }}
      />

      <h3 className='orderplaced' style={{ color: '#28a745' }}>
        Your Order Placed Successfully
      </h3>
    </div>
  );
}
