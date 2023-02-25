describe('User Open Application',() => {
  it('User can open diet meal apps ', async() => {
      await expect($('[text="Welcome..."]')).toHaveText("Welcome...");
      await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]')).toHaveText("Isi formulir untuk membuat/menambahkan user");      
  })
})

describe('User can fill out the Personal Data form',() => {
  it('As a User, i can input name: Naufal', async() => {
      await $('[text="Name"]').setValue("Naufal Zainul Muttaqin");
  })
  it('As a User, i can input weight: 48', async() => {
      await $('[text="Weight"]').setValue(48);
  })
  it('As a User, i can input height: 174', async() => {
      await $('[text="Height"]').setValue(174);
  })
  it('As a User, i can choose gender: Male', async() => {
      await $('[id="com.fghilmany.dietmealapp:id/rb_male"]').click();
  })
  it(' As a User, i can click button "NEXT"', async() => {
      await $('[id="com.fghilmany.dietmealapp:id/bt_next"]').click();
      await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]')).toHaveText("Isi formulir untuk membuat/menambahkan user"); 
      await expect($('[id="com.fghilmany.dietmealapp:id/title_activity"]')).toHaveText("Aktivitas sehari-hari"); 
  })
})

describe('User can fill out the daily activity form',() => {
  it('As a User, i can choose the daily activity', async() => {
      await $('[text="Sekolah, Kuliah, Kerja Kantor, dsj."]').click();
  })
  it('As a User, i can click button "SELESAI"', async() => {
      await $('[id="com.fghilmany.dietmealapp:id/bt_finish"]').click();
      await expect($('[text="Ready to some calories today?"]')).toHaveText("Ready to some calories today?");
  })  
})