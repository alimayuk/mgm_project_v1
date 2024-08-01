import {
  Button,
  Calendar,
  DatePicker,
  Input,
  Modal,
  Select,
  TimePicker,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import dayjs from "dayjs";

const dateFormat = "DD/MM/YYYY";
const timeFormat = "HH:mm";

const disabledDate = (current) => {
  // Bugünden önceki günleri seçilemez yapar
  return current && (current < dayjs().startOf("day") || current.day() === 0);
};

const CalendarComp = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div>
      <Button
        style={{ margin: "20px 20px " }}
        type="primary"
        onClick={() => setIsModalVisible(true)}
      >
        Yeni Randevu Oluştur
      </Button>
      <Calendar style={{ borderRadius: "20px", padding: "0 20px" }} />
      <Modal
        title="Yeni Randevu"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalVisible(false)}>
            İptal
          </Button>,
          <Button key="submit" type="primary">
            Oluştur
          </Button>,
        ]}
      >
      <Select
          showSearch
          placeholder="Klinik Ara"
          style={{ display: "block", marginBottom: "10px" }}
        />
        <Select
          showSearch
          placeholder="Hekim Ara"
          style={{ display: "block", marginBottom: "10px" }}
        />
        <DatePicker
          format={dateFormat}
          style={{ marginBottom: "10px" }}
          disabledDate={disabledDate}
        />
        <TimePicker
          format={timeFormat}
          disabledTime={(current) => disabledTime(current, "start")}
          minuteStep={30}
          style={{ marginBottom: "10px", marginLeft: "10px" }}
          showNow={false}
          use12Hours={false}
          placeholder="Başlangıç Saati"
        />
        <TimePicker
          format={timeFormat}
          disabledTime={(current) => disabledTime(current, "end")}
          minuteStep={30}
          style={{ marginBottom: "10px", marginLeft: "10px" }}
          showNow={false}
          use12Hours={false}
          placeholder="Bitiş Saati"
        />
        <Input placeholder="Randevu Başlığı" style={{ marginBottom: "10px" }} />
        <Input placeholder="Ad Soyad" style={{ marginBottom: "10px" }} />
        <Input placeholder="Telefon No" style={{ marginBottom: "10px" }} />
        <TextArea
          placeholder="Randevu Açıklama"
          style={{ marginBottom: "10px" }}
        />
      </Modal>
    </div>
  );
};

export default CalendarComp;
