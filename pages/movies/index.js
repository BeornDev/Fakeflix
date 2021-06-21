import React from "react";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div>
      <p style={{ background: "pink", padding: "100px 0", color: "white" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc
        felis, pretium vitae sapien a, dapibus fermentum mi. In ac erat sed elit
        bibendum rutrum. Aenean vitae erat lectus. Suspendisse luctus lobortis
        eros vitae posuere. Nunc eu nunc libero. Maecenas faucibus neque vel
        arcu rutrum, in porttitor neque luctus. Praesent gravida ultricies est
        quis faucibus. Morbi hendrerit euismod porta. Ut ac urna metus. Donec
        congue enim eget tortor pulvinar semper. Suspendisse maximus, magna ut
        aliquam convallis, quam erat faucibus eros, sit amet malesuada ipsum
        arcu eu ligula. Ut ullamcorper congue sem, et convallis tellus eleifend
        sit amet. Aenean fermentum hendrerit metus, sed tincidunt odio molestie
        ac. Morbi finibus neque id laoreet sagittis. Duis in purus varius tortor
        aliquam convallis id eu purus. Nunc lectus tellus, vulputate vitae
        libero vitae, luctus laoreet ligula. Donec volutpat venenatis mi in
        faucibus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Aliquam sit amet dolor ac ante
        venenatis fermentum. Vivamus sed ipsum vel velit pharetra maximus. Fusce
        justo mi, auctor vitae eros ac, aliquam aliquam risus. Vestibulum vel
        egestas dolor. Aliquam vitae sem purus. Phasellus ornare nec nulla non
        placerat. Curabitur imperdiet ut sem at condimentum. Suspendisse
        bibendum, ligula ac pharetra laoreet, ex est pulvinar turpis, vel
        aliquet enim nisi nec risus. Ut rhoncus commodo diam, in condimentum
        neque euismod quis. Nunc et nunc non sapien ornare eleifend. Maecenas
        feugiat porta nisl sit amet convallis. Maecenas porta pellentesque diam
        et tempus. Maecenas turpis lorem, rhoncus at turpis nec, scelerisque
        iaculis augue. Praesent lacinia dui mi, at viverra nisi malesuada ac.
        Mauris gravida nibh convallis erat placerat, id accumsan sapien
        hendrerit. Praesent suscipit orci ac erat mattis, et congue diam porta.
        Aliquam aliquam ligula magna, ut interdum orci posuere nec. Duis dui
        massa, eleifend sit amet scelerisque hendrerit, convallis id dui. Donec
        imperdiet rhoncus semper. Mauris blandit mi nisi, vitae congue mauris
        facilisis ut. Sed accumsan ligula a interdum cursus. Aliquam bibendum
        lobortis erat, et pretium ipsum accumsan at. In nec laoreet dolor.
        Aliquam sit amet orci sit amet ipsum posuere elementum. Nulla auctor
        erat et gravida lobortis. In maximus in turpis eget aliquam. Suspendisse
        nec ante tristique, ultrices urna eu, blandit enim. Fusce id pulvinar
        ipsum. Mauris volutpat felis vitae nisl placerat suscipit. Fusce
        hendrerit dui ut turpis fringilla, non eleifend arcu tempus. Aenean
        vehicula mollis ligula sit amet consectetur. Sed molestie dui turpis,
        eget tincidunt eros hendrerit eu. Suspendisse augue urna, cursus ut
        neque id, tincidunt vulputate velit. Vestibulum pharetra quam non
        pellentesque scelerisque. Duis fermentum imperdiet iaculis. Nullam lorem
        quam, varius at vulputate suscipit, faucibus a nisl. Cras in posuere
        nibh, in porttitor felis. Aliquam consequat, metus a congue sodales,
        neque lectus consequat risus, nec dapibus ligula ipsum in dolor.
      </p>
    </div>
  );
}
