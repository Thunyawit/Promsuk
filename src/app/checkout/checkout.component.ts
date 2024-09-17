import { ActivatedRoute } from '@angular/router';

export class CheckoutComponent implements OnInit {
  customerName = '';
  customerAddress = '';
  customerPhone = '';
  paymentMethod = 'credit-card';
  selectedShoeImage: string | undefined; // ตัวแปรสำหรับเก็บภาพรองเท้าที่เลือก

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // รับค่าพารามิเตอร์จาก URL และจัดการค่าที่ได้เป็น string
    const imageUrl = this.route.snapshot.paramMap.get('imageUrl');
    if (imageUrl) {
      this.selectedShoeImage = imageUrl; // ตั้งค่าภาพรองเท้าหากมีค่า
    } else {
      console.error('imageUrl not found in URL');
    }
  }
  

  onSubmit() {
    // เก็บข้อมูลการสั่งซื้อ
    const orderDetails = {
      name: this.customerName,
      address: this.customerAddress,
      phone: this.customerPhone,
      paymentMethod: this.paymentMethod,
      shoeImage: this.selectedShoeImage // เพิ่มข้อมูลรองเท้าที่เลือกในการสั่งซื้อ
    };

    console.log('สั่งซื้อเรียบร้อย:', orderDetails);
    // สามารถเรียกใช้ API เพื่อส่งข้อมูลการสั่งซื้อไปยังเซิร์ฟเวอร์ได้ที่นี่
  }
}
